---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/set-csteamsmessagingpolicy
applicable: Skype for Business Online
title: Set-CsTeamsMessagingPolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Set-CsTeamsMessagingPolicy

## SYNOPSIS
The CsTeamsMessagingPolicy cmdlets enable administrators to control if a user is enabled to exchange messages. These also help determine the type of messages users can create and modify.

## SYNTAX

### Identity (Default)
```
Set-CsTeamsMessagingPolicy [-Tenant <Guid>] [-Description <String>] [-AllowUrlPreviews <Boolean>]
 [-AllowOwnerDeleteMessage <Boolean>] [-AllowUserEditMessage <Boolean>] [-AllowUserDeleteMessage <Boolean>]
 [-AllowUserChat <Boolean>] [-AllowGiphy <Boolean>] [-GiphyRatingType <String>] [-AllowMemes <Boolean>]
 [-AllowStickers <Boolean>] [-AllowUserTranslation <Boolean>] [-AllowImmersiveReader <Boolean>]
 [-AllowRemoveUser <Boolean>] [-AllowPriorityMessages <Boolean>] [-AllowSmartReply <Boolean>] [-Allow [-ReadReceiptsEnabledType <String>]
 [-AudioMessageEnabledType <AudioMessageEnabledTypeEnum>] [-ChannelsInChatListEnabledType <ChannelsInChatListEnabledTypeEnum>]
 [[-Identity] <XdsIdentity>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsTeamsMessagingPolicy [-Tenant <Guid>] [-Description <String>] [-AllowUrlPreviews <Boolean>]
 [-AllowOwnerDeleteMessage <Boolean>] [-AllowUserEditMessage <Boolean>] [-AllowUserDeleteMessage <Boolean>]
 [-AllowUserChat <Boolean>] [-AllowGiphy <Boolean>] [-GiphyRatingType <String>] [-AllowMemes <Boolean>]
 [-AllowStickers <Boolean>] [-AllowUserTranslation <Boolean>] [-AllowImmersiveReader <Boolean>]
 [-AllowRemoveUser <Boolean>] [-AllowPriorityMessages <Boolean>] [-AllowSmartReply <Boolean>] [-ReadReceiptsEnabledType <String>]
 [-AudioMessageEnabledType <AudioMessageEnabledTypeEnum>] [-ChannelsInChatListEnabledType <ChannelsInChatListEnabledTypeEnum>]
 [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
 The CsTeamsMessagingPolicy cmdlets enable administrators to control if a user is enabled to exchange messages. These also help determine the type of messages users can create and modify. This cmdlet updates a Teams messaging policy. Custom policies can then be assigned to users using the Grant-CsTeamsMessagingPolicy cmdlet.


## EXAMPLES

### Example 1

```powershell
PS C:\> Set-CsTeamsMessagingPolicy -Identity StudentMessagingPolicy -AllowGiphy $false -AllowMemes $false
```

In this example two different property values are configured: AllowGiphy is set to false and AllowMemes is set to False.
All other policy properties will be left as previously assigned.

### Example 2

```powershell
PS C:\> Get-CsTeamsMessagingPolicy -Identity StudentMessagingPolicy | Set-CsTeamsMessagingPolicy -AllowGiphy $false -AllowMemes $false
```

In this example two different property values are configured for all teams messaging policies in the organization: AllowGiphy is set to false and AllowMemes is set to False.
All other policy properties will be left as previously assigned.


## PARAMETERS

### -AllowGiphy
Determines whether a user is allowed to access and post Giphys. Set this to TRUE to allow. Set this FALSE to prohibit.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowImmersiveReader
Determines whether a user is allowed to use Immersive Reader for reading conversation messages. Set this to TRUE to allow. Set this FALSE to prohibit.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowMemes
Determines whether a user is allowed to access and post memes. Set this to TRUE to allow. Set this FALSE to prohibit.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowOwnerDeleteMessage
Determines whether owners are allowed to delete all the messages in their team. Set this to TRUE to allow. Set this to FALSE to prohibit.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowPriorityMessages
Determines whether a user is allowed to send priorities messages. Set this to TRUE to allow. Set this FALSE to prohibit.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowSmartReply
Determines whether a user is allowed to use smart replies. Set this to TRUE to allow. Set this to FALSE to prohibit. 

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowRemoveUser
Determines whether a user is allowed to remove a user from a conversation. Set this to TRUE to allow. Set this FALSE to prohibit.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowStickers
Determines whether a user is allowed to access and post stickers. Set this to TRUE to allow. Set this FALSE to prohibit.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowUserChat
Determines whether a user is allowed to chat. Set this to TRUE to allow a user to chat across private chat, group chat and in meetings. Set this to FALSE to prohibit all chat.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowUserDeleteMessage
Determines whether a user is allowed to delete their own messages. Set this to TRUE to allow. Set this to FALSE to prohibit.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowUserEditMessage
Determines whether a user is allowed to edit their own messages. Set this to TRUE to allow. Set this to FALSE to prohibit.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowUserTranslation
Determines whether a user is allowed to translate messages to their client languages. Set this to TRUE to allow. Set this to FALSE to prohibit.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowUrlPreviews
Use this setting to turn automatic URL previewing on or off in messages. Set this to TRUE to turn on. Set this to FALSE to turn off.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AudioMessageEnabledType
Determines whether a user is allowed to send audio messages. Possible values are: ChatsAndChannels, ChatsOnly, Disabled.

```yaml
Type: AudioMessageEnabledTypeEnum
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ChannelsInChatListEnabledType
Possible values are: DisabledUserOverride, EnabledUserOverride.

```yaml
Type: ChannelsInChatListEnabledTypeEnum
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Provide a description of your policy to identify purpose of creating it.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GiphyRatingType
Determines the Giphy content restrictions applicable to a user. Set this to STRICT, MODERATE or NORESTRICTION.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Identity for the teams messaging policy you're modifying.  To modify the global policy, use this syntax: -Identity global. To modify a per-user policy, use syntax similar to this: -Identity TeamsMessagingPolicy.

If you do not specify an Identity the Set-CsTeamsMessagingPolicy cmdlet will automatically modify the global policy.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReadReceiptsEnabledType
Use this setting to specify whether read receipts are user controlled, enabled for everyone, or disabled. Set this to UserPreference, Everyone or None.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the tenant account whose external user communication policy are being created. For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return your tenant ID by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter. Instead, the tenant ID will automatically be filled in for you based on your connection information. The Tenant parameter is primarily for use in a hybrid deployment.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### System.Management.Automation.PSObject


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

