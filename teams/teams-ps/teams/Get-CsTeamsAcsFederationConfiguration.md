---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Get-CsTeamsAcsFederationConfiguration
author: tomkau
ms.author: tomkau
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsacsfederationconfiguration
schema: 2.0.0
---

# Get-CsTeamsAcsFederationConfiguration

## SYNOPSIS

This cmdlet is used to retrieve the federation configuration between Teams and Azure Communication Services. For more information, refer to [Azure Communication Services and Teams Interoperability](/azure/communication-services/concepts/teams-interop).

## SYNTAX

```powershell
Get-CsTeamsAcsFederationConfiguration
   [-Identity <String[]>]
   [-Filter <String>]
```

## DESCRIPTION

Federation between Teams and Azure Communication Services (ACS) allows users of custom solutions built with ACS to connect and communicate with Teams users over voice, video, Teams users over voice, video and screen sharing, and more. For more information, see [Teams interoperability](/azure/communication-services/concepts/teams-interop).

This cmdlet is used retrieve the Teams and ACS federation configuration for a Teams tenant.

You must be a Teams service admin or a Teams communication admin for your organization to run the cmdlet.

## Examples

### Example 1
In this example, federation has been enabled for just one ACS resource.

```powershell
Get-CsTeamsAcsFederationConfiguration
```
```Output
Identity             : Global
AllowedAcsResources  : {'faced04c-2ced-433d-90db-063e424b87b1'}
EnableAcsUsers       : True
```

### Example 2
In this example, federation is disabled for all ACS resources.

```powershell
Get-CsTeamsAcsFederationConfiguration
```
```Output
Identity             : Global
AllowedAcsResources  : {}
EnableAcsUsers       : False
```

## PARAMETERS

### -Filter
Enables you to use wildcards when specifying the Teams and ACS federation configuration settings to be returned.
Because you can only have a single, global instance of these settings there is little reason to use the Filter parameter.
However, if you prefer, you can use syntax similar to this to retrieve the global settings: -Identity "g*".

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the collection of tenant federation configuration settings to be modified. Because each tenant is limited to a single, global collection of federation settings there is no need include this parameter when calling the Set-CsTenantFederationConfiguration cmdlet. If you do choose to use the Identity parameter you must also include the Tenant parameter. For example:

`Set-CsTenantFederationConfiguration -Tenant "bf19b7db-6960-41e5-a139-2aa373474354" -Identity "global"`

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-CsTeamsAcsFederationConfiguration](Set-CsTeamsAcsFederationConfiguration.md)

[New-CsExternalAccessPolicy](New-CsExternalAccessPolicy.md)

[Set-CsExternalAccessPolicy](Set-CsExternalAccessPolicy.md)

[Grant-CsExternalAccessPolicy](Grant-CsExternalAccessPolicy.md)
