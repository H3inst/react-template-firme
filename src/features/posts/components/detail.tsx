import * as Mantine from "@mantine/core";
import { useGetComments } from "../services/getComments";

interface IDetailModalProps {
  opened: boolean;
  postId: number;
  onClose: () => void;
}

export default function DetailModal(props: IDetailModalProps) {
  const { data: comments = [], isPending: isPendingComments } = useGetComments(
    props.postId,
  );

  const renderComments = comments.map((comment) => (
    <Mantine.Paper key={comment.commentId} withBorder mb="sm" p="md">
      <Mantine.Title order={4}>{comment.commentName}</Mantine.Title>
      <Mantine.Text mb="md">{comment.userEmail}</Mantine.Text>
      <Mantine.Text>{comment.commentBody}</Mantine.Text>
    </Mantine.Paper>
  ));

  const renderComponent = () => {
    return (
      <Mantine.Modal
        title="Comentarios"
        opened={props.opened}
        onClose={props.onClose}
        size="lg"
      >
        {isPendingComments ? (
          <Mantine.Center h={500}>
            <Mantine.Loader size="xl" />
          </Mantine.Center>
        ) : (
          renderComments
        )}
      </Mantine.Modal>
    );
  };

  return renderComponent();
}
