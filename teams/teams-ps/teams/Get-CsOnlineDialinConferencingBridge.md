---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/skype/get-csonlinedialinconferencingbridge
schema: 2.0.0
---

# Get-CsOnlineDialinConferencingBridge

## SYNOPSIS
Use the Get-CsOnlineDialInConferencingBridge cmdlet to view the settings on an audio conferencing bridge that is used when Microsoft is the audio conferencing provider.

## SYNTAX

### Get1 (Default)
```
Get-CsOnlineDialinConferencingBridge [-Name <String>] [<CommonParameters>]
```

### Get
```
Get-CsOnlineDialinConferencingBridge [-Identity] <String> [<CommonParameters>]
```

## DESCRIPTION
The Get-CsOnlineDialInConferencingBridge cmdlet is used to view all of the settings for all dial-in conferencing bridges or for a specific dial-in conferencing bridge.
However, if the PSTN conferencing service status of the tenant is Disabled, no results will be displayed.

## EXAMPLES

### Example 1
```
Get-CsOnlineDialInConferencingBridge | fl
```

This example shows how to return all of the audio conferencing bridges that are being used and returns the results in a formatted list.

### Example 2
```
Get-CsOnlineDialInConferencingBridge -Tenant 26efe125-c070-46f9-8ed0-fc02165a167c
```

This example shows how to return all of the audio conferencing bridges for the given tenant.

## PARAMETERS

### -Identity
Specifies the globally-unique identifier (GUID) for the audio conferencing bridge.

```yaml
Type: String
Parameter Sets: Get
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Specifies the name of the audio conferencing bridge.

```yaml
Type: String
Parameter Sets: Get1
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

### None
## OUTPUTS

### None
## NOTES

## RELATED LINKS
