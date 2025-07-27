import { BadRequestException } from '@nestjs/common'

export const validateId = (id: string) => {
  if (!id?.trim()) {
    throw new BadRequestException('ID là bắt buộc')
  }
}
