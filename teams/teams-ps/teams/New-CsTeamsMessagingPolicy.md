---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamsmessagingpolicy
applicable: Microsoft Teams
title: New-CsTeamsMessagingPolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# New-CsTeamsMessagingPolicy

## SYNOPSIS
The CsTeamsMessagingPolicy cmdlets enable administrators to control if a user is enabled to exchange messages. These also help determine the type of messages users can create and modify.

## SYNTAX

```
New-CsTeamsMessagingPolicy [[-Identity] <XdsIdentity>]
 [-AllowExtendedWorkInfoInSearch <Boolean>]
 [-AllowGiphy <Boolean>]
 [-AllowImmersiveReader <Boolean>]
 [-AllowMemes <Boolean>]
 [-AllowOwnerDeleteMessage <Boolean>]
 [-AllowPriorityMessages <Boolean>]
 [-AllowRemoveUser <Boolean>]
 [-AllowSmartCompose] <Boolean>] 
 [-AllowSmartReply <Boolean>]
 [-AllowStickers <Boolean>]
 [-AllowUrlPreviews <Boolean>]
 [-AllowUserChat <Boolean>]
 [-AllowUserDeleteMessage <Boolean>]
 [-AllowUserEditMessage <Boolean>]
 [-AllowUserTranslation <Boolean>]
 [-AudioMessageEnabledType <AudioMessageEnabledTypeEnum>]
 [-ChannelsInChatListEnabledType <ChannelsInChatListEnabledTypeEnum>]
 [-ChatPermissionRole <String>]
 [-Confirm]
 [-CreateCustomEmojis <Boolean>]
 [-DeleteCustomEmojis <Boolean>]
 [-Description <String>]
 [-Force]
 [-GiphyRatingType <String>]
 [-InMemory]
 [-ReadReceiptsEnabledType <String>]
 [-Tenant <Guid>]
 [-WhatIf]
 [-Identity] <String>
 ```

## DESCRIPTION
The CsTeamsMessagingPolicy cmdlets enable administrators to control if a user is enabled to exchange messages. These also help determine the type of messages users can create and modify.  This cmdlet creates a new Teams messaging policy.  Custom policies can then be assigned to users using the Grant-CsTeamsMessagingPolicy cmdlet.

## EXAMPLES

### Example 1
```
powershell
PS C:\> New-CsTeamsMessagingPolicy -Identity StudentMessagingPolicy -AllowGiphy $false -AllowMemes $false
```

In this example two different property values are configured: AllowGiphy is set to false and AllowMemes is set to False.
All other policy properties will use the default values.

## PARAMETERS

### -Identity
Unique identifier for the teams messaging policy to be created.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowExtendedWorkInfoInSearch
This setting enables/disables showing company name and department name in search results for MTO users.

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

If the `-AllowUserDeleteMessage` parameter is set to FALSE, the team owner will not be able to delete their own messages.

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

### -AllowSmartCompose
Turn on this setting to let a user get text predictions for chat messages.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Con nombre
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowSmartReply
Turn this setting on to enable suggested replies for chat messages.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
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

### -AllowUrlPreviews
Use this setting to turn automatic URL previewing on or off in messages. Set this to TRUE to turn on. Set this to FALSE to turn off.
Note: [Optional Connected Experiences](https://learn.microsoft.com/deployoffice/privacy/manage-privacy-controls#policy-setting-for-optional-connected-experiences) must be also enabled for URL previews to be allowed.

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

### -AudioMessageEnabledType
Determines whether a user is allowed to send audio messages. Possible values are: ChatsAndChannels,ChatsOnly,Disabled.

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
On mobile devices, enable to display favorite channels above recent chats.

Possible values are: DisabledUserOverride,EnabledUserOverride.

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

### -ChatPermissionRole
Determines the Supervised Chat role of the user.  Set this to Full to allow the user to supervise chats.  Supervisors have the ability to initiate chats with and invite any user within the environment.  Set this to Limited to allow the user to initiate conversations with Full and Limited permissioned users, but not Restricted.  Set this to Restricted to block chat creation with anyone other than Full permissioned users.  

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Restricted
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

### -CreateCustomEmojis
This setting enables the creation of custom emojis and reactions within an organization for the specified policy users.

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

### -DeleteCustomEmojis
These settings enable and disable the editing and deletion of custom emojis and reactions for the users included in the messaging policy.

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

### -InMemory
Creates an object reference without actually committing the object as a permanent change. If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-.

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

### -ReadReceiptsEnabledType
{{ Fill ReadReceiptsEnabledType Description }}

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

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
