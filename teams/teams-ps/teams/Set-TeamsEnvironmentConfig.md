---
external help file: Microsoft.TeamsCmdlets.PowerShell.Connect.dll-Help.xml
Module Name: MicrosoftTeams
online version:
schema: 2.0.0
author: VikneshMSFT
ms.author: vimohan
ms.reviewer: pbafna
manager: vinelap
---

# Set-TeamsEnvironmentConfig

## SYNOPSIS

Sets environment specific configurations on local machine and will be used to connect to the right environment when running connect-microsoftteams

## SYNTAX

```
Set-TeamsEnvironmentConfig [-EndpointUris <Hashtable>] [-TeamsEnvironmentName <String>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet sets environment specific configurations like endpoint URIs(AAD\Graph etc.) and Teams environment (GCCH\DOD etc) in local machine.  
When running connect-microsoftteams, environment specific information set in this cmdlet will be considered unless overridden by parameters of connect-microsoftteams.
Parameters passed to connect-microsoftteams will take precedence over the information set by this cmdlet. 
This cmdlet is not applicable for public and Azure government cloud and was introduced specifically to support other special clouds of Microsoft.  
Administrators are advised not to use this cmdlet in public and azure government clouds.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-TeamsEnvironmentConfig -TeamsEnvironmentName TeamsGcch
```

Sets environment as GCCH in local machine and when connect-microsoftteams is run, authentication will happen in GCCH cloud and Microsoft Teams module will connect to GCCH environment.

### Example 2
```powershell
$endPointUriDict = @{ActiveDirectory = 'https://login.microsoftonline.us/';MsGraphEndpointResourceId = 'https://graph.microsoft.us'}
Set-TeamsEnvironmentConfig -TeamsEnvironmentName $endPointUriDict
```
Sets endpoint uris required for sepcial clouds.

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
This can be used to provide custom endpoints.

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
This can be used to provide Teams environment to connect to.
- TeamsGCCH, TeamsDOD

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES
Set-TeamsEnvironmentConfig is only introduced for special clouds and administrators of public and fairfax cloud should not use this cmdlet.
## RELATED LINKS
