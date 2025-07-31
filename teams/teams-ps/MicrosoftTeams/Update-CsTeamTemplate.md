---
author: serdarsoysal
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/update-csteamtemplate
schema: 2.0.0
title: Update-CsTeamTemplate
---

# Update-CsTeamTemplate

## SYNOPSIS

This cmdlet submits an operation that updates a custom team template with new team template settings.

## SYNTAX

### UpdateExpanded (Default)

```powershell
Update-CsTeamTemplate -OdataId <String> -DisplayName <String> -ShortDescription <String>
 [-App <ITeamsAppTemplate[]>] [-Category <String[]>] [-Channel <IChannelTemplate[]>]
 [-Classification <String>] [-Description <String>] [-DiscoverySetting <ITeamDiscoverySettings>]
 [-FunSetting <ITeamFunSettings>] [-GuestSetting <ITeamGuestSettings>] [-Icon <String>]
 [-IsMembershipLimitedToOwner] [-MemberSetting <ITeamMemberSettings>]
 [-MessagingSetting <ITeamMessagingSettings>] [-OwnerUserObjectId <String>] [-PublishedBy <String>]
 [-Specialization <String>] [-TemplateId <String>] [-Uri <String>] [-Visibility <String>] [-Break] [-HttpPipelineAppend <SendAsyncStep[]>]
 [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>] [-ProxyCredential <PSCredential>]
 [-ProxyUseDefaultCredentials] [-Confirm] [-WhatIf]
 [<CommonParameters>]
```

### Update

```powershell
Update-CsTeamTemplate -OdataId <String> -Body <ITeamTemplate> [-Break]
 [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>]
 [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### UpdateViaIdentity

```
Update-CsTeamTemplate -InputObject <IConfigApiBasedCmdletsIdentity> -Body <ITeamTemplate> [-Break]
 [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>]
 [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### UpdateViaIdentityExpanded

```
Update-CsTeamTemplate -InputObject <IConfigApiBasedCmdletsIdentity> -DisplayName <String>
 -ShortDescription <String> [-App <ITeamsAppTemplate[]>] [-Category <String[]>]
 [-Channel <IChannelTemplate[]>] [-Classification <String>] [-Description <String>]
 [-DiscoverySetting <ITeamDiscoverySettings>] [-FunSetting <ITeamFunSettings>]
 [-GuestSetting <ITeamGuestSettings>] [-Icon <String>] [-IsMembershipLimitedToOwner]
 [-MemberSetting <ITeamMemberSettings>] [-MessagingSetting <ITeamMessagingSettings>]
 [-OwnerUserObjectId <String>] [-PublishedBy <String>] [-Specialization <String>] [-TemplateId <String>]
 [-Uri <String>] [-Visibility <String>] [-Break]
 [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>]
 [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
NOTE: The response is a PowerShell object formatted as a JSON for readability. Please refer to the examples for suggested interaction flows for template management.

## EXAMPLES

### EXAMPLE 1

```powershell
PS C:\> (Get-CsTeamTemplate -OdataId '/api/teamtemplates/v1.0/bfd1ccc8-40f4-4996-833f-461947d23348/Tenant/fr-FR') > input.json
# open json in your favorite editor, make changes

Update-CsTeamTemplate -OdataId '/api/teamtemplates/v1.0/bfd1ccc8-40f4-4996-833f-461947d23348/Tenant/fr-FR' -Body (Get-Content '.\input.json' | Out-String)
```

Step 1: Creates a JSON file of the template you have specified.
Step 2: Updates the template with JSON file you have edited.

### EXAMPLE 2

```powershell
PS C:\> $template = New-Object Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.TeamTemplate -Property @{`
DisplayName='New Template';`
ShortDescription='Short Definition';`
Description='New Description';`
App=@{id='feda49f8-b9f2-4985-90f0-dd88a8f80ee1'}, @{id='1d71218a-92ad-4254-be15-c5ab7a3e4423'};`
Channel=@{`
  displayName = "General";`
  id= "General";`
  isFavoriteByDefault= $true`
  },`
  @{`
    displayName= "test";`
    id= "b82b7d0a-6bc9-4fd8-bf09-d432e4ea0475";`
    isFavoriteByDefault= $false`
  }`
}

PS C:\> Update-CsTeamTemplate -OdataId '/api/teamtemplates/v1.0/bfd1ccc8-40f4-4996-833f-461947d23348/Tenant/fr-FR' -Body $template
```

Update to a new object

### EXAMPLE 3

```powershell
PS C:\> Update-CsTeamTemplate  -OdataId '/api/teamtemplates/v1.0/bfd1ccc8-40f4-4996-833f-461947d23348/Tenant/fr-FR' `
-Locale en-US -DisplayName 'New Template' `
-ShortDescription 'New Description' `
-App @{id='feda49f8-b9f2-4985-90f0-dd88a8f80ee1'}, @{id='1d71218a-92ad-4254-be15-c5ab7a3e4423'} `
-Channel @{ `
displayName = "General"; `
id= "General"; `
isFavoriteByDefault= $true `
}, `
@{ `
  displayName= "test"; `
  id= "b82b7d0a-6bc9-4fd8-bf09-d432e4ea0475"; `
  isFavoriteByDefault= $false `
}
```
> [!Note]
> It can take up to 24 hours for Teams users to see a custom template change in the gallery.

## PARAMETERS

### -App

Gets or sets the set of applications that should be installed in teams created based on the template.The app catalog is the main directory for information about each app; this set is intended only as a reference.
To construct, see NOTES section for APP properties and create a hash table.

```yaml
Type: Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ITeamsAppTemplate[]
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Body

The client input for a request to create a template.
Only admins from Config Api can perform this request.
To construct, see NOTES section for BODY properties and create a hash table.

```yaml
Type: Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ITeamTemplate
Parameter Sets: Update, UpdateViaIdentity
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Break

Wait for .NET debugger to attach

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Category

Gets or sets list of categories.

```yaml
Type: System.String[]
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Channel

Gets or sets the set of channel templates included in the team template.
To construct, see NOTES section for CHANNEL properties and create a hash table.

```yaml
Type: Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IChannelTemplate[]
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Classification

Gets or sets the team's classification.Tenant admins configure Microsoft Entra ID with the set of possible values.

```yaml
Type: System.String
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
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
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description

Gets or sets the team's Description.

```yaml
Type: System.String
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiscoverySetting

Governs discoverability of a team.
To construct, see NOTES section for DISCOVERYSETTING properties and create a hash table.

```yaml
Type: Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ITeamDiscoverySettings
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName

Gets or sets the team's DisplayName.

```yaml
Type: System.String
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FunSetting

Governs use of fun media like giphy and stickers in the team.
To construct, see NOTES section for FUNSETTING properties and create a hash table.

```yaml
Type: Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ITeamFunSettings
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GuestSetting

Guest role settings for the team.
To construct, see NOTES section for GUESTSETTING properties and create a hash table.

```yaml
Type: Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ITeamGuestSettings
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HttpPipelineAppend

SendAsync Pipeline Steps to be appended to the front of the pipeline

```yaml
Type: SendAsyncStep[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HttpPipelinePrepend

SendAsync Pipeline Steps to be prepended to the front of the pipeline

```yaml
Type: SendAsyncStep[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Icon

Gets or sets template icon.

```yaml
Type: System.String
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InputObject

Identity Parameter
To construct, see NOTES section for INPUTOBJECT properties and create a hash table.

```yaml
Type: Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IConfigApiBasedCmdletsIdentity
Parameter Sets: UpdateViaIdentity, UpdateViaIdentityExpanded
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -IsMembershipLimitedToOwner

Gets or sets whether to limit the membership of the team to owners in the Microsoft Entra group until an owner "activates" the team.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MemberSetting

Member role settings for the team.
To construct, see NOTES section for MEMBERSETTING properties and create a hash table.

```yaml
Type: Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ITeamMemberSettings
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessagingSetting

Governs use of messaging features within the teamThese are settings the team owner should be able to modify from UI after team creation.
To construct, see NOTES section for MESSAGINGSETTING properties and create a hash table.

```yaml
Type: Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ITeamMessagingSettings
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OdataId

A composite URI of a template.

```yaml
Type: System.String
Parameter Sets: Update, UpdateExpanded
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OwnerUserObjectId

Gets or sets the Microsoft Entra user object id of the user who should be set as the owner of the new team.Only to be used when an application or administrative user is making the request on behalf of the specified user.

```yaml
Type: System.String
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Proxy

The URI for the proxy server to use

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyCredential

Credentials for a proxy server to use for the remote call

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyUseDefaultCredentials

Use the default credentials for the proxy

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublishedBy

Gets or sets published name.

```yaml
Type: System.String
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShortDescription

Gets or sets template short description.

```yaml
Type: System.String
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Specialization

The specialization or use case describing the team.Used for telemetry/BI, part of the team context exposed to app developers, and for legacy implementations of differentiated features for education.

```yaml
Type: System.String
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TemplateId

Gets or sets the id of the base template for the team.Either a Microsoft base template or a custom template.

```yaml
Type: System.String
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Uri

Gets or sets uri to be used for GetTemplate api call.

```yaml
Type: System.String
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Visibility

Used to control the scope of users who can view a group/team and its members, and ability to join.

```yaml
Type: System.String
Parameter Sets: UpdateExpanded, UpdateViaIdentityExpanded
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
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IConfigApiBasedCmdletsIdentity

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ITeamTemplate

## OUTPUTS

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ICreateTemplateResponse

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IErrorObject

## NOTES

ALIASES

COMPLEX PARAMETER PROPERTIES

To create the parameters described below, construct a hash table containing the appropriate properties. For information on hash tables, run Get-Help about_Hash_Tables.

APP \<ITeamsAppTemplate[]\>: Gets or sets the set of applications that should be installed in teams created based on the template.The app catalog is the main directory for information about each app; this set is intended only as a reference.

- `[Id <String>]`: Gets or sets the app's ID in the global apps catalog.

BODY \<ITeamTemplate\>: The client input for a request to create a template.         Only admins from Config Api can perform this request.

- `DisplayName <String>`: Gets or sets the team's DisplayName.
- `ShortDescription <String>`: Gets or sets template short description.
- `[App <ITeamsAppTemplate[]>]`: Gets or sets the set of applications that should be installed in teams created based on the template.         The app catalog is the main directory for information about each app; this set is intended only as a reference.
  - `[Id <String>]`: Gets or sets the app's ID in the global apps catalog.
- `[Category <String[]>]`: Gets or sets list of categories.
- `[Channel <IChannelTemplate[]>]`: Gets or sets the set of channel templates included in the team template.
  - `[Description <String>]`: Gets or sets channel description as displayed to users.
  - `[DisplayName <String>]`: Gets or sets channel name as displayed to users.
  - `[Id <String>]`: Gets or sets identifier for the channel template.
  - `[IsFavoriteByDefault <Boolean?>]`: Gets or sets a value indicating whether new members of the team should automatically favorite the channel, pinning it for visibility in the UI and using resources to make switching to the channel faster.
  - `[Tab <IChannelTabTemplate[]>]`: Gets or sets collection of tabs that should be added to the channel.
    - `[Configuration <ITeamsTabConfiguration>]`: Represents the configuration of a tab.
      - `[ContentUrl <String>]`: Gets or sets the Url used for rendering tab contents in Teams.
      - `[EntityId <String>]`: Gets or sets the identifier for the entity hosted by the tab provider.
      - `[RemoveUrl <String>]`: Gets or sets the Url that is invoked when the user tries to remove a tab from the FE client.
      - `[WebsiteUrl <String>]`: Gets or sets the Url for showing tab contents outside of Teams.
    - `[Id <String>]`: Gets or sets identifier for the channel tab template.
    - `[Key <String>]`: Gets a unique identifier.
    - `[MessageId <String>]`: Gets or sets id used to identify the chat message associated with the tab.
    - `[Name <String>]`: Gets or sets the tab name displayed to users.
    - `[SortOrderIndex <String>]`: Gets or sets index of the order used for sorting tabs.
    - `[TeamsAppId <String>]`: Gets or sets the app's id in the global apps catalog.
    - `[WebUrl <String>]`: Gets or sets the deep link url of the tab instance.
- `[Classification <String>]`: Gets or sets the team's classification.         Tenant admins configure Microsoft Entra ID with the set of possible values.
- `[Description <String>]`: Gets or sets the team's Description.
- `[DiscoverySetting <ITeamDiscoverySettings>]`: Governs discoverability of a team.
  - `ShowInTeamsSearchAndSuggestion <Boolean>`: Gets or sets value indicating if team is visible within search and suggestions in Teams clients.
- `[FunSetting <ITeamFunSettings>]`: Governs use of fun media like giphy and stickers in the team.
  - `AllowCustomMeme <Boolean>`: Gets or sets a value indicating whether users are allowed to create and post custom meme images in team conversations.
  - `AllowGiphy <Boolean>`: Gets or sets a value indicating whether users can post giphy content in team conversations.
  - `AllowStickersAndMeme <Boolean>`: Gets or sets a value indicating whether users can post stickers and memes in team conversations.
  - `GiphyContentRating <String>`: Gets or sets the rating filter on giphy content.
- `[GuestSetting <ITeamGuestSettings>]`: Guest role settings for the team.
  - `AllowCreateUpdateChannel <Boolean>`: Gets or sets a value indicating whether guests can create or edit channels in the team.
  - `AllowDeleteChannel <Boolean>`: Gets or sets a value indicating whether guests can delete team channels.
- `[Icon <String>]`: Gets or sets template icon.
- `[IsMembershipLimitedToOwner <Boolean?>]`: Gets or sets whether to limit the membership of the team to owners in the Microsoft Entra group until an owner "activates" the team.
- `[MemberSetting <ITeamMemberSettings>]`: Member role settings for the team.
  - `AllowAddRemoveApp <Boolean>`: Gets or sets a value indicating whether members can add or remove apps in the team.
  - `AllowCreatePrivateChannel <Boolean>`: Gets or Sets a value indicating whether members can create Private channels.
  - `AllowCreateUpdateChannel <Boolean>`: Gets or sets a value indicating whether members can create or edit channels in the team.
  - `AllowCreateUpdateRemoveConnector <Boolean>`: Gets or sets a value indicating whether members can add, edit, or remove connectors in the team.
  - `AllowCreateUpdateRemoveTab <Boolean>`: Gets or sets a value indicating whether members can add, edit or remove pinned tabs in the team.
  - `AllowDeleteChannel <Boolean>`: Gets or sets a value indicating whether members can delete team channels.
  - `UploadCustomApp <Boolean>`: Gets or sets a value indicating is allowed to upload custom apps.
- `[MessagingSetting <ITeamMessagingSettings>]`: Governs use of messaging features within the team         These are settings the team owner should be able to modify from UI after team creation.
  - `AllowChannelMention <Boolean>`: Gets or sets a value indicating whether team members can at-mention entire channels in team conversations.
  - `AllowOwnerDeleteMessage <Boolean>`: Gets or sets a value indicating whether team owners can delete anyone's messages in team conversations.
  - `AllowTeamMention <Boolean>`: Gets or sets a value indicating whether team members can at-mention the entire team in team conversations.
  - `AllowUserDeleteMessage <Boolean>`: Gets or sets a value indicating whether team members can delete their own messages in team conversations.
  - `AllowUserEditMessage <Boolean>`: Gets or sets a value indicating whether team members can edit their own messages in team conversations.
- `[OwnerUserObjectId <String>]`: Gets or sets the Microsoft Entra user object id of the user who should be set as the owner of the new team.         Only to be used when an application or administrative user is making the request on behalf of the specified user.
- `[PublishedBy <String>]`: Gets or sets published name.
- `[Specialization <String>]`: The specialization or use case describing the team.         Used for telemetry/BI, part of the team context exposed to app developers, and for legacy implementations of differentiated features for education.
- `[TemplateId <String>]`: Gets or sets the id of the base template for the team.         Either a Microsoft base template or a custom template.
- `[Uri <String>]`: Gets or sets uri to be used for GetTemplate api call.
- `[Visibility <String>]`: Used to control the scope of users who can view a group/team and its members, and ability to join.

CHANNEL <IChannelTemplate[]>: Gets or sets the set of channel templates included in the team template.

- `[Description <String>]`: Gets or sets channel description as displayed to users.
- `[DisplayName <String>]`: Gets or sets channel name as displayed to users.
- `[Id <String>]`: Gets or sets identifier for the channel template.
- `[IsFavoriteByDefault <Boolean?>]`: Gets or sets a value indicating whether new members of the team should automatically favorite the channel, pinning it for visibility in the UI and using resources to make switching to the channel faster.
- `[Tab <IChannelTabTemplate[]>]`: Gets or sets collection of tabs that should be added to the channel.
  - `[Configuration <ITeamsTabConfiguration>]`: Represents the configuration of a tab.
    - `[ContentUrl <String>]`: Gets or sets the Url used for rendering tab contents in Teams.
    - `[EntityId <String>]`: Gets or sets the identifier for the entity hosted by the tab provider.
    - `[RemoveUrl <String>]`: Gets or sets the Url that is invoked when the user tries to remove a tab from the FE client.
    - `[WebsiteUrl <String>]`: Gets or sets the Url for showing tab contents outside of Teams.
  - `[Id <String>]`: Gets or sets identifier for the channel tab template.
  - `[Key <String>]`: Gets a unique identifier.
  - `[MessageId <String>]`: Gets or sets id used to identify the chat message associated with the tab.
  - `[Name <String>]`: Gets or sets the tab name displayed to users.
  - `[SortOrderIndex <String>]`: Gets or sets index of the order used for sorting tabs.
  - `[TeamsAppId <String>]`: Gets or sets the app's id in the global apps catalog.
  - `[WebUrl <String>]`: Gets or sets the deep link url of the tab instance.

DISCOVERYSETTING \<ITeamDiscoverySettings\>: Governs discoverability of a team.

- `ShowInTeamsSearchAndSuggestion <Boolean>`: Gets or sets value indicating if team is visible within search and suggestions in Teams clients.

FUNSETTING \<ITeamFunSettings\>: Governs use of fun media like giphy and stickers in the team.

- `AllowCustomMeme <Boolean>`: Gets or sets a value indicating whether users are allowed to create and post custom meme images in team conversations.
- `AllowGiphy <Boolean>`: Gets or sets a value indicating whether users can post giphy content in team conversations.
- `AllowStickersAndMeme <Boolean>`: Gets or sets a value indicating whether users can post stickers and memes in team conversations.
- `GiphyContentRating <String>`: Gets or sets the rating filter on giphy content.

GUESTSETTING \<ITeamGuestSettings\>: Guest role settings for the team.

- `AllowCreateUpdateChannel <Boolean>`: Gets or sets a value indicating whether guests can create or edit channels in the team.
- `AllowDeleteChannel <Boolean>`: Gets or sets a value indicating whether guests can delete team channels.

INPUTOBJECT \<IConfigApiBasedCmdletsIdentity\>: Identity Parameter

- `[Bssid <String>]`:
- `[ChassisId <String>]`:
- `[CivicAddressId <String>]`: Civic address id.
- `[Country <String>]`:
- `[GroupId <String>]`: The ID of a group whose policy assignments will be returned.
- `[Id <String>]`:
- `[Identity <String>]`:
- `[Locale <String>]`:
- `[LocationId <String>]`: Location id.
- `[OdataId <String>]`: A composite URI of a template.
- `[OperationId <String>]`: The ID of a batch policy assignment operation.
- `[OrderId <String>]`:
- `[PackageName <String>]`: The name of a specific policy package
- `[PolicyType <String>]`: The policy type for which group policy assignments will be returned.
- `[Port <String>]`:
- `[PortInOrderId <String>]`:
- `[PublicTemplateLocale <String>]`: Language and country code for localization of publicly available templates.
- `[SubnetId <String>]`:
- `[TenantId <String>]`:
- `[UserId <String>]`: UserId. Supports Guid. Eventually UPN and SIP.

MEMBERSETTING \<ITeamMemberSettings\>: Member role settings for the team.

- `AllowAddRemoveApp <Boolean>`: Gets or sets a value indicating whether members can add or remove apps in the team.
- `AllowCreatePrivateChannel <Boolean>`: Gets or Sets a value indicating whether members can create Private channels.
- `AllowCreateUpdateChannel <Boolean>`: Gets or sets a value indicating whether members can create or edit channels in the team.
- `AllowCreateUpdateRemoveConnector <Boolean>`: Gets or sets a value indicating whether members can add, edit, or remove connectors in the team.
- `AllowCreateUpdateRemoveTab <Boolean>`: Gets or sets a value indicating whether members can add, edit or remove pinned tabs in the team.
- `AllowDeleteChannel <Boolean>`: Gets or sets a value indicating whether members can delete team channels.
- `UploadCustomApp <Boolean>`: Gets or sets a value indicating is allowed to upload custom apps.

MESSAGINGSETTING \<ITeamMessagingSettings\>: Governs use of messaging features within the teamThese are settings the team owner should be able to modify from UI after team creation.

- `AllowChannelMention <Boolean>`: Gets or sets a value indicating whether team members can at-mention entire channels in team conversations.
- `AllowOwnerDeleteMessage <Boolean>`: Gets or sets a value indicating whether team owners can delete anyone's messages in team conversations.
- `AllowTeamMention <Boolean>`: Gets or sets a value indicating whether team members can at-mention the entire team in team conversations.
- `AllowUserDeleteMessage <Boolean>`: Gets or sets a value indicating whether team members can delete their own messages in team conversations.
- `AllowUserEditMessage <Boolean>`: Gets or sets a value indicating whether team members can edit their own messages in team conversations.

## RELATED LINKS

- [Get-CsTeamTemplateList](https://learn.microsoft.com/powershell/module/teams/get-csteamtemplatelist)
- [Get-CsTeamTemplate](https://learn.microsoft.com/powershell/module/teams/get-csteamtemplatelist)
- [New-CsTeamTemplate](https://learn.microsoft.com/powershell/module/teams/get-csteamtemplatelist)
- [Update-CsTeamTemplate](https://learn.microsoft.com/powershell/module/teams/get-csteamtemplatelist)
- [Remove-CsTeamTemplate](https://learn.microsoft.com/powershell/module/teams/get-csteamtemplatelist)
