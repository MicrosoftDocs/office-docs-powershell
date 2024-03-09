---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Set-CsTeamsAcsFederationConfiguration
author: tomkau
ms.author: tomkau
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamsacsfederationconfiguration
schema: 2.0.0
---

# Set-CsTeamsAcsFederationConfiguration

## SYNOPSIS

**Limited Preview:** Functionality described in this document is currently in limited preview and only authorized organizations have access. This preview version is provided without a service-level agreement, and is not recommended for production workloads. Certain features might not be supported or might have constrained capabilities. For more information, see [Supplemental Terms of Use for Microsoft Azure Previews](https://azure.microsoft.com/support/legal/preview-supplemental-terms/).

This cmdlet is used to manage the federation configuration between Teams and Azure Communication Services. For more information, please see [Azure Communication Services and Teams Interoperability](/azure/communication-services/concepts/teams-interop).

## SYNTAX

```powershell
Set-CsTeamsAcsFederationConfiguration
   [-EnableAcsUsers <Boolean>]
   [-AllowedAcsResources <String[]>]
   [-WhatIf]
   [-Confirm]
   [<CommonParameters>]
```

## DESCRIPTION

Federation between Teams and Azure Communication Services (ACS) allows external users from ACS to connect and communicate with Teams users over voice and video. These custom applications may be used by end users or by bots, and there is no differentiation in how they appear to Teams users unless the developer of the application explicitly indicates this as part of the communication. For more information, see [Teams interoperability](/azure/communication-services/concepts/teams-interop).

This cmdlet is used to enable or disable Teams and ACS federation for a Teams tenant, and to specify which ACS resources can connect to Teams. Only listed ACS resources can be allowed.

You must be a Teams service admin, a Teams communication admin, or Global Administrator for your organization to run the cmdlet.

## EXAMPLES

### Example 1
In this example, federation between Teams and ACS is disabled completely.

```powershell
Set-CsTeamsAcsFederationConfiguration -EnableAcsUsers $False
```

### Example 2
In this example, federation is enabled for just one ACS resource.

```powershell
$allowlist = @('faced04c-2ced-433d-90db-063e424b87b1')
Set-CsTeamsAcsFederationConfiguration -EnableAcsUsers $True -AllowedAcsResources $allowlist
```

## PARAMETERS

### -EnableAcsUsers

Set to True to enable federation between Teams and ACS. When set to False, all other parameters are ignored.

```yaml
Type: Boolean
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowedAcsResources

The list of the ACS resources (at least one) for which federation is enabled, when EnableAcsUsers is set to true. If EnableAcsUsers is set to false, then this list is ignored and should be null/empty.

The ACS resources are listed using their immutable resource id, which is a guid that can be found on the Azure portal.

```yaml
Type: String[]
Position: Named
Default value: Empty/Null
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsTeamsAcsFederationConfiguration](Get-CsTeamsAcsFederationConfiguration.md)

[New-CsExternalAccessPolicy](/powershell/module/teams/new-csexternalaccesspolicy?view=skype-ps)

[Set-CsExternalAccessPolicy](/powershell/module/teams/set-csexternalaccesspolicy?view=skype-ps)

[Grant-CsExternalAccessPolicy](/powershell/module/teams/grant-csexternalaccesspolicy?view=skype-ps)
