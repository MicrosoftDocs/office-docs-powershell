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
```

## DESCRIPTION

Federation between Teams and Azure Communication Services (ACS) allows users of custom solutions built with ACS to connect and communicate with Teams users over voice, video, Teams users over voice, video and screen sharing, and more. For more information, see [Teams interoperability](/azure/communication-services/concepts/teams-interop).

This cmdlet is used retrieve the Teams and ACS federation configuration for a Teams tenant.

You must be a Teams service admin, a Teams communication admin, or Global Administrator for your organization to run the cmdlet.

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

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-CsTeamsAcsFederationConfiguration](Set-CsTeamsAcsFederationConfiguration.md)

[New-CsExternalAccessPolicy](New-CsExternalAccessPolicy.md)

[Set-CsExternalAccessPolicy](Set-CsExternalAccessPolicy.md)

[Grant-CsExternalAccessPolicy](Grant-CsExternalAccessPolicy.md)
