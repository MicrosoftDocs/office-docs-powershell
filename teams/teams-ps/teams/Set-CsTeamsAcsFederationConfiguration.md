---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Set-CsTeamsAcsFederationConfiguration
author: tomkau
ms.author: tomkau
online version: https://docs.microsoft.com/powershell/module/teams/set-csteamsacsfederationconfiguration
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
   [-AllowAllAcsResources <Boolean>]
   [-AllowedAcsResources <String[]>]
   [-BlockedAcsResources <String[]>]
   [-WhatIf]
   [-Confirm]
   [<CommonParameters>]
```

## DESCRIPTION

Federation between Teams and Azure Communication Services (ACS) allows custom applications built with ACS to connect and communicate with Teams users over voice, video, and chat. These custom applications may be used by end users or by bots, and there is no differentiation in how they appear to Teams users unless the developer of the application explicitly indicates this as part of the communication. For more information, see [Teams interoperability](/azure/communication-services/concepts/teams-interop).

This cmdlet is used to enable or disable Teams and ACS federation for a Teams tenant, and to specify which ACS resources can connect to Teams. All ACS resources can be allowed, with possible exclusions, or just selected ACS resources can be allowed (recommended).

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
Set-CsTeamsAcsFederationConfiguration -EnableAcsUsers $True -AllowAllAcsResources $False -AllowedAcsResources $allowlist
```

### Example 3
In this example, federation is enabled for all ACS resources except for two.

```powershell
$blocklist = @('bf19b7db-6960-41e5-a139-2aa373474354','dac4607d-d2d0-40e5-84df-6f32ebd1251b')
Set-CsTeamsAcsFederationConfiguration -EnableAcsUsers $True -AllowAllAcsResources $True -BlockedAcsResources $blocklist
```

## PARAMETERS

### -EnableAcsUsers

Set to True to enable federation between Teams and ACS. When set to False, all other parameters are ignored.

During public preview, federation between Teams and ACS is disabled by default. When federation between Teams and ACS is generally available, it will be enabled by default.

```yaml
Type: Boolean
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowAllAcsResources

When set to True, federation is enabled with all ACS resources except for the resources listed in BlockedAcsResources (which can be null/empty), and the parameter AllowedAcsResources is ignored and should be null/empty.

When set to False, federation is disabled with all ACS resources, except for the resources listed in AllowedAcsResources (of which there must be at least one), and the parameter BlockedAcsResources is ignored and must be null/empty.

```yaml
Type: Boolean
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowedAcsResources

The list of the ACS resources (at least one) for which federation is enabled, when AllowAllAcsResources is set to false. If AllowAllAcsResources is set to true, then this list is ignored and should be null/empty.

The ACS resources are listed using their immutable resource id, which is a guid that can be found on the Azure portal. A resource cannot be listed in both AllowedAcsResources and BlockedAcsResource.

```yaml
Type: String[]
Position: Named
Default value: Empty/Null
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockedAcsResources

The list of the ACS resources (if any) for which federation is disabled, when AllowAllAcsResources is set to true. If AllowAllAcsResources is set to false, then this list is ignored and must be null/empty.

The ACS resources are listed using their immutable resource id, which is a guid that can be found on the Azure portal. A resource cannot be listed in both AllowedAcsResources and BlockedAcsResource.

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

[New-CsExternalAccessPolicy](/powershell/module/skype/new-csexternalaccesspolicy?view=skype-ps)

[Set-CsExternalAccessPolicy](/powershell/module/skype/set-csexternalaccesspolicy?view=skype-ps)

[Grant-CsExternalAccessPolicy](/powershell/module/skype/grant-csexternalaccesspolicy?view=skype-ps)
