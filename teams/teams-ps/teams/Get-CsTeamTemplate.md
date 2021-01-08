---
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Module Name: Microsoft.Teams.ConfigAPI.Cmdlets
online version: https://docs.microsoft.com/en-us/powershell/module/teams/get-csteamtemplate
title: Get-CsTeamTemplate
author: levdavid
ms.author: legorbun
ms.reviewer: 
manager: farahf
schema: 2.0.0
---

# Get-CsTeamTemplate

## SYNOPSIS

This cmdlet supports retrieving details of a team template available to your tenant given the team template uri.

## SYNTAX

### Get (Default)

```powershell
Get-CsTeamTemplate -OdataId <String> [-Break] [-HttpPipelineAppend <SendAsyncStep[]>]
 [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>] [-ProxyCredential <PSCredential>]
 [-ProxyUseDefaultCredentials] [<CommonParameters>]
```

### GetViaIdentity

```powershell
Get-CsTeamTemplate -InputObject <IConfigApiBasedCmdletsIdentity> [-Break]
 [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>]
 [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet supports retrieving details of a team template available to your tenant given the team template uri.

## EXAMPLES

### EXAMPLE 1

```powershell
(Get-CsTeamTemplateList -Locale en-US) | where Name -like 'test' | ForEach-Object {Get-CsTeamTemplate -OdataId $_.OdataId}
```

Returns template in JSON format for templates that have locale set to en-US and template names that include ‘test’the universe of templates the admin’s tenant has access to.

{
  "templateId": "cefcf333-91a9-43d0-919f-bbca5b7d2b24",
  "displayName": "test",
  "description": "test",
  "schemaVersion": "v1.0",
  "scope": "Tenant",
  "locale": "en-US",
  "icon": "https://statics.teams.cdn.office.net/evergreen-assets/teamtemplates/icons/default_tenant.svg",
  "discoverySettings": {
    "showInTeamsSearchAndSuggestions": false
  },
  "visibility": "Private",
  "channels": [
    {
      "id": "General",
      "displayName": "General",
      "isFavoriteByDefault": true,
      "tabs": [ ]
    },
    {
      "id": "744414e7-01d7-4108-bf95-b3d0441150c7",
      "displayName": "test",
      "description": "",
      "isFavoriteByDefault": true,
      "tabs": [ ]
    },
    {
      "id": "ca606482-13f6-4611-9061-e7f47e556d8e",
      "displayName": "test123",
      "description": "",
      "isFavoriteByDefault": false,
      "tabs": [ ]
    },
    {
      "id": "a94d85ec-b7d7-44e9-83f6-86a4f4dc8da9",
      "displayName": "1234",
      "description": "",
      "isFavoriteByDefault": false,
      "tabs": [ ]
    }
  ],
  "memberSettings": {
    "allowCreateUpdateChannels": false,
    "allowDeleteChannels": false,
    "allowAddRemoveApps": false,
    "uploadCustomApp": false,
    "allowCreateUpdateRemoveTabs": false,
    "allowCreateUpdateRemoveConnectors": false,
    "allowCreatePrivateChannels": false
  },
  "guestSettings": {
    "allowCreateUpdateChannels": false,
    "allowDeleteChannels": false
  },
  "messagingSettings": {
    "allowUserEditMessages": false,
    "allowUserDeleteMessages": false,
    "allowOwnerDeleteMessages": false,
    "allowTeamMentions": false,
    "allowChannelMentions": false
  },
  "funSettings": {
    "allowGiphy": false,
    "allowStickersAndMemes": false,
    "allowCustomMemes": false
  },
  "isMembershipLimitedToOwners": false,
  "apps": [
    {
      "id": "26bc2873-6023-480c-a11b-76b66605ce8c"
    },
    {
      "id": "com.microsoft.teamspace.tab.planner"
    },
    {
      "id": "com.microsoft.teamspace.tab.vsts"
    }
  ],
  "isDynamicMembership": false,
  "modifiedBy": "6c4445f6-a23d-473c-951d-7474d289c6b3",
  "modifiedOn": "2020-08-21T13:02:48.2021992Z",
  "shortDescription": "test"
}

### EXAMPLE 2

```powershell
Get-CsTeamTemplate -OdataId '/api/teamtemplates/v1.0/cefcf333-91a9-43d0-919f-bbca5b7d2b24/Tenant/en-US' > 'config.json'
```

Saves the template with specified template ID as a JSON file.

## PARAMETERS

### -OdataId

A composite URI of a template.

```yaml
Type: String
Parameter Sets: Get
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InputObject

Identity Parameter
To construct, see NOTES section for INPUTOBJECT properties and create a hash table.

```yaml
Type: IConfigApiBasedCmdletsIdentity
Parameter Sets: GetViaIdentity
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

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

OData ID

## OUTPUTS

- Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IErrorObject
- Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ITeamTemplate

## NOTES

COMPLEX PARAMETER PROPERTIES

To create the parameters described below, construct a hash table containing the appropriate properties.
For information on hash tables, run Get-Help about_Hash_Tables.

INPUTOBJECT \<IConfigApiBasedCmdletsIdentity\>: Identity Parameter\
  \[Bssid \<String\>\]: \
  \[ChassisId \<String\>\]: \
  \[CivicAddressId \<String\>\]: Civic address id.\
  \[Country \<String\>\]: \
  \[GroupId \<String\>\]: The ID of a group whose policy assignments will be returned.\
  \[Id \<String\>\]: \
  \[Identity \<String\>\]: \
  \[Locale \<String\>\]: The language and country code of templates localization.\
  \[LocationId \<String\>\]: Location id.\
  \[OdataId \<String\>\]: A composite URI of a template.\
  \[OperationId \<String\>\]: The ID of a batch policy assignment operation.\
  \[OrderId \<String\>\]: \
  \[PackageName \<String\>\]: The name of a specific policy package\
  \[PolicyType \<String\>\]: The policy type for which group policy assignments will be returned.\
  \[Port \<String\>\]: \
  \[PortInOrderId \<String\>\]: \
  \[SubnetId \<String\>\]: \
  \[TenantId \<String\>\]: \
  \[UserId \<String\>\]: UserId.

Supports Guid.
Eventually UPN and SIP.

## RELATED LINKS

- [Get-CsTeamTemplateList](https://docs.microsoft.com/en-us/powershell/module/teams/get-csteamtemplatelist)
- [Get-CsTeamTemplate](https://docs.microsoft.com/en-us/powershell/module/teams/get-csteamtemplate)
- [New-CsTeamTemplate](https://docs.microsoft.com/en-us/powershell/module/teams/new-csteamtemplate)
- [Update-CsTeamTemplate](https://docs.microsoft.com/en-us/powershell/module/teams/update-csteamtemplate)
- [Remove-CsTeamTemplate](https://docs.microsoft.com/en-us/powershell/module/teams/remove-csteamtemplate)
