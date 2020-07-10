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

In a multi-geo company, this cmdlet requires a multi-geo tenant to work, and enables the ability to move a user closer to their sites

## EXAMPLES

### EXAMPLE 1

```powershell
Start-SPOUserAndContentMove -UserPrincipalName username@contoso.com -DestinationDataLocation EUR
```

This example moves the user username@contoso.com from the current location, to the European location (EUR).

### EXAMPLE 2

```powershell
Start-SPOUserAndContentMove -UserPrincipalName username@contoso.com -DestinationDataLocation JPN
```

This example moves the user username@contoso.com from the current location, to the Japanese location (JPN).

### EXAMPLE 3

```powershell
Start-SPOUserAndContentMove -UserPrincipalName username@contoso.com -DestinationDataLocation EUR -PreferredMoveBeginDate ((Get-Date).AddHours(1)) -PreferredMoveEndDate ((Get-Date).AddHour(12))
```

This example moves the user username@contoso.com from the current location, to the European location (EUR), preferred to start 1 hour ahead from now, until 12 hours to that relative time.

## PARAMETERS

### -DestinationDataLocation

Defines the new destination of the user that you want to move.

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

Makes a SPO notification that the user is being move

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

Switch parameter to Overwrite the information into the DB

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

Specifies what is the preferred Date and time to start the job

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

Specifies what is the preferred Date and time to stop the job

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

### -Reserved

This parameter will only check for reserved users to be moved near to their sites

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: False
Position: 7
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

This parameter will force the cmdlet to execute only validation

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
