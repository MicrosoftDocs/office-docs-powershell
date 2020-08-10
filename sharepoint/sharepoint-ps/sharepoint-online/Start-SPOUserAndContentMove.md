---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/start-spouserandcontentmove
applicable: SharePoint Online
title: Start-SPOUserAndContentMove
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Start-SPOUserAndContentMove

## SYNOPSIS

Starts the ability to move a user closer to their sites.

## SYNTAX

```powershell
Start-SPOUserAndContentMove [-UserPrincipalName] <String> [-DestinationDataLocation] <String>
 [[-PreferredMoveBeginDate] <DateTime>] [[-PreferredMoveEndDate] <DateTime>] [-OverwriteOdb]
 [[-Notify] <String>] [[-Reserved] <String>] [-ValidationOnly] [<CommonParameters>]
```

## DESCRIPTION

This commandlet applies to Multi-Geo tenants and it is designed to move user profiles and their corresponding OneDrive personal sites across geo locations. These commandlets may only be ran by a SharePoint or Global administrator, who is connected to the SharePoint administration center of the geo location where the user is currently hosted. 

## EXAMPLES

### EXAMPLE 1

```powershell
Start-SPOUserAndContentMove -UserPrincipalName username@contoso.onmicrosoft.com -DestinationDataLocation EUR
```

This example moves the user username@contoso.onmicrosoft.com from their current location, to the European location (EUR).

### EXAMPLE 2

```powershell
Start-SPOUserAndContentMove -UserPrincipalName username@contoso.onmicrosoft.com -DestinationDataLocation JPN
```

This example moves the user username@contoso.onmicrosoft.com from their current location, to the Japanese location (JPN).

### EXAMPLE 3

```powershell
Start-SPOUserAndContentMove -UserPrincipalName username@contoso.onmicrosoft.com -DestinationDataLocation EUR -PreferredMoveBeginDate ((Get-Date).AddHours(1)) -PreferredMoveEndDate ((Get-Date).AddHour(12))
```

This example moves the user username@contoso.onmicrosoft.com from their current location, to the European location (EUR), with a preferred start move date. Doing so is recommended for administrators who wish to plan their user moves outside business hours and on weekends. 

## PARAMETERS

### -DestinationDataLocation

Defines the destination location where you want to move the user. Note that you may only move a user to their preferred data location. Thus before moving a user, you must change their preferred data location. 

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Notify

Provides an SPO notification that the user is being moved.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: False
Position: 6
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverwriteOdb

This parameter can be used to overrite a OneDrive in the destination location, if there is one present. This is only recommended in cases where an administrator wants to replace a OneDrive that already exists in the destination location, with the moved OneDrive. 

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreferredMoveBeginDate

Specifies what is the preferred date and time to begin the move. 

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreferredMoveEndDate

Specifies what is the preferred date and time to stop stop the move. Recommened when administrators are scripting large scale moves that they wish to complete within a timeframe. 

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserPrincipalName

UserPrincipalName or UPN defined for the specific user on the SPO tenant

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ValidationOnly

Use this parameter to validate if the user is able to be moved. This parameter is recommended for any user move. 

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: False
Position: 8
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[Start-SPOSiteRename](Start-SPOSiteRename.md)

[Start-SPOUserAndContentMove](Start-SPOUserAndContentMove.md)

[Stop-SPOUserAndContentMove](Stop-SPOUserAndContentMove.md)

[Get-SPOUserAndContentMoveState](Get-SPOUserAndContentMoveState.md)
