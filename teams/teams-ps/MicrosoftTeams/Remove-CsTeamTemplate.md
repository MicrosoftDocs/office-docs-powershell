---
author: serdarsoysal
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Locale: en-US
manager: farahf
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamtemplate
schema: 2.0.0
title: Remove-CsTeamTemplate
---

# Remove-CsTeamTemplate

## SYNOPSIS
This cmdlet deletes a specified Team Template from Microsoft Teams.

## SYNTAX

### Delete (Default)

```
Remove-CsTeamTemplate -OdataId <String> [-Break] [-HttpPipelineAppend <SendAsyncStep[]>]
 [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>] [-ProxyCredential <PSCredential>]
 [-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### DeleteViaIdentity

```
Remove-CsTeamTemplate -InputObject <IConfigApiBasedCmdletsIdentity> [-Break]
 [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>]
 [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet deletes a specified Team Template from Microsoft Teams. The template can be identified by its OData ID or by using the Identity parameter.

## EXAMPLES

### EXAMPLE 1

```powershell
PS C:\> Remove-CsTeamTemplate -OdataId '/api/teamtemplates/v1.0/b24f8ba6-0949-452e-ad4b-a353f38ed8af/Tenant/en-US'
```

Removes template with OData Id '/api/teamtemplates/v1.0/b24f8ba6-0949-452e-ad4b-a353f38ed8af/Tenant/en-US'.

### EXAMPLE 2

```powershell
PS C:\> (Get-CsTeamTemplateList -PublicTemplateLocale en-US) | where Name -like 'test' | ForEach-Object {Remove-CsTeamTemplate -OdataId $_.OdataId}
```

Removes template that meets the following specifications: 1) Locale set to en-US. 2) Name contains 'test'.

## PARAMETERS

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

### -InputObject

Identity Parameter
To construct, see NOTES section for INPUTOBJECT properties and create a hash table.

```yaml
Type: Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IConfigApiBasedCmdletsIdentity
Parameter Sets: DeleteViaIdentity
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -OdataId

A composite URI of a template.

```yaml
Type: System.String
Parameter Sets: Delete
Aliases:

Required: True
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

## OUTPUTS

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IAny

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IErrorObject

## NOTES

ALIASES

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

[Get-CsTeamTemplateList](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamtemplatelist)

[Get-CsTeamTemplate](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamtemplate)

[New-CsTeamTemplate](https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamtemplate)

[Update-CsTeamTemplate](https://learn.microsoft.com/powershell/module/microsoftteams/update-csteamtemplate)

[Remove-CsTeamTemplate](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamtemplate)
