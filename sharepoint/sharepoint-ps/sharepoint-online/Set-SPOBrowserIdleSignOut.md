---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/set-spobrowseridlesignout
applicable: SharePoint Online
title: Set-SPOBrowserIdleSignOut
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Set-SPOBrowserIdleSignOut

## SYNOPSIS

.

## SYNTAX

```powershell
Set-SPOBrowserIdleSignOut [-Enabled] <Boolean> [[-WarnAfter] <TimeSpan>] [[-SignOutAfter] <TimeSpan>] [<CommonParameters>]
```

## DESCRIPTION

Use this cmdlet to set the current configuration values for Idle session sign-out, the time at which users are warned and subsequently signed out of Office 365 after a period of browser inactivity in SharePoint and OneDrive

## EXAMPLES

### Example 1

```powershell
Set-SPOBrowserIdleSignOut -Enabled:$true -WarnAfter  "0.00:45:00" -SignOutAfter  "0.01:00:00"
```

This example enables the browser idle sign-out policy, sets a warning at 45 minutes and signs out users after a period of 60 minutes of browser inactivity.

### Example 2

```powershell
Set-SPOBrowserIdleSignOut -Enabled:$true -WarnAfter (New-TimeSpan -Minutes 45) -SignOutAfter (New-TimeSpan -Hours 1)
```

This example enables the browser idle sign-out policy, sets a warning at 45 minutes and signs out users after a period of 60 minutes of browser inactivity. This example leverages the use of New-TimeSpan cmdlet to create the required timespan values.

## PARAMETERS

### -Enabled

Enables the browser idle sign-out policy

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SignOutAfter

Specifies a time interval.
This parameter is used to specify a time value for **Get-SPOBrowserIdleSignOut** parameters such as *SignOutAfter*.
Specify the time interval in the following format: 

\[-\]D.H:M:S.F

where: 

- D = Days (0 to 10675199) 
- H = Hours (0 to 23) 
- M = Minutes (0 to 59) 
- S = Seconds (0 to 59) 
- F = Fractions of a second (0 to 9999999)

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WarnAfter

Specifies a time interval.
This parameter is used to specify a time value for **Get-SPOBrowserIdleSignOut** parameters such as *WarnAfter*.
Specify the time interval in the following format: 

\[-\]D.H:M:S.F

where: 

- D = Days (0 to 10675199) 
- H = Hours (0 to 23) 
- M = Minutes (0 to 59) 
- S = Seconds (0 to 59) 
- F = Fractions of a second (0 to 9999999)

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases:

Required: True
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

## RELATED LINKS
