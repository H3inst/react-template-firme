import * as Mantine from "@mantine/core";
import type { IComment } from "../types/comments";

interface IDetailModalProps {
  opened: boolean;
  comments: IComment[];
  onClose: () => void;
  isLoading: boolean;
}

export default function DetailModal(props: IDetailModalProps) {
  const renderComments = props.comments.map((comment) => (
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
        {props.isLoading ? (
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
