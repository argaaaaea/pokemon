import { Spinner } from "@chakra-ui/react";
import { FC, memo } from "react";

interface LoadingModalProps {
  show: boolean;
}

const LoadingModal: FC<LoadingModalProps> = memo(({ show }) => {
  return (
    <>
      {show && (
        <section
          className={`z-[5000] flex items-center justify-center w-screen h-screen fixed top-0 px-4 bg-black bg-opacity-50 left-0`}
        >
          <Spinner color="#007AFF" size="lg" />
        </section>
      )}
    </>
  );
});

LoadingModal.displayName = "LoadingModal";
export { LoadingModal };
