---
external help file: Microsoft.TeamsCmdlets.PowerShell.Connect.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/set-teamsenvironmentconfig
title: Set-TeamsEnvironmentConfig
schema: 2.0.0
author: VikneshMSFT
ms.author: vimohan
ms.reviewer: pbafna
manager: vinelap
---

# Set-TeamsEnvironmentConfig

## SYNOPSIS

Sets environment-specific configurations on the local machine and is used to connect to the right environment when running Connect-MicrosoftTeams.

## SYNTAX

```
Set-TeamsEnvironmentConfig [-EndpointUris <Hashtable>] [-TeamsEnvironmentName <String>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet sets environment-specific configurations like endpoint URIs(such as Microsoft Entra ID and Microsoft Graph) and Teams environment (such as GCCH and DOD) on the local machine.

When running Connect-MicrosoftTeams, environment-specific information set in this cmdlet will be considered unless overridden by Connect-MicrosoftTeams parameters.

Parameters passed to Connect-MicrosoftTeams will take precedence over the information set by this cmdlet.

Clear-TeamsEnvironmentConfig should not be used in Commercial, GCC, GCC High, or DoD environments.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-TeamsEnvironmentConfig -TeamsEnvironmentName TeamsChina
```

Sets the environment as Gallatin China on a local machine and when Connect-MicrosoftTeams is run, authentication will happen in the Gallatin China cloud and Microsoft Teams module will connect to the Gallatin environment.

### Example 2
```powershell
$endPointUriDict = @{ActiveDirectory = 'https://login.microsoftonline.us/';MsGraphEndpointResourceId = 'https://graph.microsoft.us'}
Set-TeamsEnvironmentConfig -TeamsEnvironmentName $endPointUriDict
```
Sets endpoint URIs required for special clouds.

### Example 3
```powershell
Set-TeamsEnvironmentConfig -TeamsEnvironmentName TeamsChina

$cred=get-credential
Move-CsUser -Identity "PilarA@contoso.com" -Target "sipfed.online.lync.com" -Credential $cred
```
This cmdlet is mainly introduced to support Skype for Business to Microsoft Teams user migration using Move-CsUser.

This example shows how tenant admins can run Move-CsUser in Gallatin and other special clouds after setting the environment configuration using Set-TeamsEnvironmentConfig.

Note that Set-TeamsEnvironmentConfig needs to be run only once for each machine. There is no need to run it each time before running Move-CsUser.

## PARAMETERS

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

### -EndpointUris
Provides custom endpoints.

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamsEnvironmentName
Provides a Teams environment to connect to, for example, Teams GCCH or Teams DoD.

```yaml
Type: String
Parameter Sets: (All)
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
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

Set-TeamsEnvironmentConfig should not be used in Commercial, GCC, GCC High, or DoD environments.

## RELATED LINKS
