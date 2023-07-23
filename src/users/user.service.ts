import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
@Injectable()
export class UserService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async getUser(): Promise<any> {
    const cachedValue = await this.cacheManager.get('cacheKey2');
    console.log(cachedValue)
    if (cachedValue) {
      return cachedValue;
    }

    // If the value is not in the cache, retrieve it from a source (e.g., database)
    const value = {name:'Hello World!'};
    await this.cacheManager.set('cacheKey2', value,  6 * 60 * 60);

    return value;
  }
}
