---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Get-CsTeamsAcsFederationConfiguration
author: tomkau
ms.author: tomkau
online version: https://docs.microsoft.com/powershell/module/teams/get-csteamsacsfederationconfiguration
schema: 2.0.0
---

# Get-CsTeamsAcsFederationConfiguration

## SYNOPSIS

**Important:** Functionality described in this document is currently in public preview. This preview version is provided without a service-level agreement, and is not recommended for production workloads. Certain features might not be supported or might have constrained capabilities. For more information, see [Supplemental Terms of Use for Microsoft Azure Previews](https://azure.microsoft.com/en-us/support/legal/preview-supplemental-terms/).

This cmdlet is used to retrieve the federation configuration between Teams and Azure Communication Services (ACS).

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

Federation between Teams and Azure Communication Services (ACS) allows users of custom solutions built with ACS to connect and communicate with Teams users over voice, video, chat, and more. For more information, see [Teams interoperability](https://docs.microsoft.com/en-us/azure/communication-services/concepts/teams-interop).

This cmdlet is used to enable or disable Teams and ACS federation for a Teams tenant, and to specify which ACS resources can connect to Teams. All ACS resources can be allowed, with possible exclusions, or just selected ACS resources can be allowed.

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

None

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsTeamsAcsFederationConfiguration](Get-CsTeamsAcsFederationConfiguration.md)

[New-CsExternalAccessPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/new-csexternalaccesspolicy?view=skype-ps)

[Set-CsExternalAccessPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/set-csexternalaccesspolicy?view=skype-ps)

[Grant-CsExternalAccessPolicy](https://docs.microsoft.com/en-us/powershell/module/skype/grant-csexternalaccesspolicy?view=skype-ps)


