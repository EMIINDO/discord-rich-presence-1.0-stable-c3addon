"use strict";

{
	globalThis.C3.Plugins.eren_DiscordRPC.Instance = class eren_DiscordRPCInstance extends globalThis.ISDKInstanceBase
	{
		constructor()
		{
			super();

            const properties = this._getInitProperties();
			
			// Initialise object properties
			var client_id = properties[0];
            if (!this._runtime.IsPreview() && globalThis.C3.Platform.IsDesktopApp){
			  	this.client = require('discord-rich-presence/')(client_id);
				this.rpc = this.client.first;
				this.avatar = null;
				this.id = null;
				this.username = null;
				this.premium = null;
				this.usertag = null;
			}

		}
		
		_release()
		{
			super._release();
		}
		
		_saveToJson()
		{
			return {
				// data to be saved for savegames
			};
		}
		
		_loadFromJson(o)
		{
			// load state for savegames
		}
	};
}