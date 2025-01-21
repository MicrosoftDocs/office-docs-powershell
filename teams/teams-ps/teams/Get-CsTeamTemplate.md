---
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Module Name: Microsoft.Teams.ConfigAPI.Cmdlets
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamtemplate
title: Get-CsTeamTemplate
author: serdarsoysal
ms.author: serdars
ms.reviewer:
manager: farahf
schema: 2.0.0
---

# Get-CsTeamTemplate

## SYNOPSIS

This cmdlet supports retrieving details of a team template available to your tenant given the team template uri.

NOTE: The returned template definition is a PowerShell object formatted as a JSON for readability. Please refer to the examples for suggested interaction flows for template management.

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
PS C:\> (Get-CsTeamTemplateList -PublicTemplateLocale en-US) | where Name -like 'test' | ForEach-Object {Get-CsTeamTemplate -OdataId $_.OdataId}
```

Within the universe of templates the admin's tenant has access to, returns a template definition object (displayed as a JSON by default) for every custom and every Microsoft en-US template which names include 'test'.

### EXAMPLE 2

```powershell
PS C:\> Get-CsTeamTemplate -OdataId '/api/teamtemplates/v1.0/cefcf333-91a9-43d0-919f-bbca5b7d2b24/Tenant/en-US' > 'config.json'
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

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IConfigApiBasedCmdletsIdentity

## OUTPUTS

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ITeamTemplate

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IErrorObject

## NOTES

COMPLEX PARAMETER PROPERTIES

To create the parameters described below, construct a hash table containing the appropriate properties. For information on hash tables, run Get-Help about_Hash_Tables.

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

## RELATED LINKS

[Get-CsTeamTemplateList](https://learn.microsoft.com/powershell/module/teams/get-csteamtemplatelist)

[Get-CsTeamTemplate](https://learn.microsoft.com/powershell/module/teams/get-csteamtemplate)

[New-CsTeamTemplate](https://learn.microsoft.com/powershell/module/teams/new-csteamtemplate)

[Update-CsTeamTemplate](https://learn.microsoft.com/powershell/module/teams/update-csteamtemplate)

[Remove-CsTeamTemplate](https://learn.microsoft.com/powershell/module/teams/remove-csteamtemplate)
