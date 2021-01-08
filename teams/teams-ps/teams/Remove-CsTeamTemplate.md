---
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Module Name: Microsoft.Teams.ConfigAPI.Cmdlets
online version: https://docs.microsoft.com/en-us/powershell/module/teams/remove-csteamtemplate
title: Remove-CsTeamTemplate
author: levdavid
ms.author: legorbun
ms.reviewer: 
manager: farahf
schema: 2.0.0
---

# Remove-CsTeamTemplate

## SYNOPSIS

This cmdlet deletes a specified Team Template from Microsoft Teams.

## SYNTAX

### Delete (Default)

```powershell
Remove-CsTeamTemplate -OdataId <String> [-Break] [-HttpPipelineAppend <SendAsyncStep[]>]
 [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>] [-ProxyCredential <PSCredential>]
 [-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### DeleteViaIdentity

```powershell
Remove-CsTeamTemplate -InputObject <IConfigApiBasedCmdletsIdentity> [-Break]
 [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>]
 [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## EXAMPLES

### EXAMPLE 1

```powershell
Remove-CsTeamTemplate -OdataId '/api/teamtemplates/v1.0/b24f8ba6-0949-452e-ad4b-a353f38ed8af/Tenant/en-US'
```

Removes template with OData Id '/api/teamtemplates/v1.0/b24f8ba6-0949-452e-ad4b-a353f38ed8af/Tenant/en-US' 

### EXAMPLE 2

```powershell
(Get-CsTeamTemplateList -Locale en-US) | where Name -like 'test' | ForEach-Object {Remove-CsTeamTemplate -OdataId $_.OdataId}
```

Removes template that meets the following specifications: 1) Locale set to en-US. 2) Name contains ‘test’  

## PARAMETERS

### -OdataId

A composite URI of a template.

```yaml
Type: String
Parameter Sets: Delete
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
Parameter Sets: DeleteViaIdentity
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

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IConfigApiBasedCmdletsIdentity

## OUTPUTS

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IAny

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.IErrorObject

## NOTES

COMPLEX PARAMETER PROPERTIES

To create the parameters described below, construct a hash table containing the appropriate properties.
For information on hash tables, run Get-Help about_Hash_Tables.

INPUTOBJECT \<IConfigApiBasedCmdletsIdentity\>: Identity Parameter\
\[Bssid \<String\>\]:\
\[ChassisId \<String\>\]:\
\[CivicAddressId \<String\>\]: Civic address id.\
\[Country \<String\>\]:\
\[GroupId \<String\>\]: The ID of a group whose policy assignments will be returned.\
\[Id \<String\>\]:\
\[Identity \<String\>\]:\
\[Locale \<String\>\]: The language and country code of templates localization.\
\[LocationId \<String\>\]: Location id.\
\[OdataId \<String\>\]: A composite URI of a template.\
\[OperationId \<String\>\]: The ID of a batch policy assignment operation.\
\[OrderId \<String\>\]:\
\[PackageName \<String\>\]: The name of a specific policy package\
\[PolicyType \<String\>\]: The policy type for which group policy assignments will be returned.\
\[Port \<String\>\]:\
\[PortInOrderId \<String\>\]:\
\[SubnetId \<String\>\]:\
\[TenantId \<String\>\]:\
\[UserId \<String\>\]: UserId.\
Supports Guid.\
Eventually UPN and SIP.

## RELATED LINKS

- [Get-CsTeamTemplateList](https://docs.microsoft.com/en-us/powershell/module/teams/get-csteamtemplatelist)
- [Get-CsTeamTemplate](https://docs.microsoft.com/en-us/powershell/module/teams/get-csteamtemplate)
- [New-CsTeamTemplate](https://docs.microsoft.com/en-us/powershell/module/teams/new-csteamtemplate)
- [Update-CsTeamTemplate](https://docs.microsoft.com/en-us/powershell/module/teams/update-csteamtemplate)
- [Remove-CsTeamTemplate](https://docs.microsoft.com/en-us/powershell/module/teams/remove-csteamtemplate)
