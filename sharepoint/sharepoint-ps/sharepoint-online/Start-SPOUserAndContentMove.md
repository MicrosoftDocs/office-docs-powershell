---
external help file: 
applicable: SharePoint Online
title: Start-SPOUserAndContentMove
schema: 2.0.0
---

# Start-SPOUserAndContentMove

## SYNOPSIS
In a multi-get company, starts the ability to move a user closer to their sites.

## SYNTAX

```
Start-SPOUserAndContentMove [-UserPrincipalName] <String> [-DestinationDataLocation] <String>
 [[-PreferredMoveBeginDate] <DateTime>] [[-PreferredMoveEndDate] <DateTime>] [-OverwriteOdb]
 [[-Notify] <String>] [[-Reserved] <String>] [-ValidationOnly] [<CommonParameters>]
```

## DESCRIPTION
{{Fill in the Description}}

## EXAMPLES

### ---------------EXAMPLE 1 --------------
```yaml
Start-SPOUserAndContentMove -UserPrinciplName username@contoso.com -DestinationDataLocation EUR
```

This will move the user username@contoso.com from the current location, example NA to the European Site (EUR)

### ---------------EXAMPLE 2--------------
```yaml
Start-SPOUserAndContentMove -UserPrinciplName username@contoso.com -DestinationDataLocation EUR
```

This will move the user username@contoso.com from the current location, example NA to the European Site (EUR)


### ---------------EXAMPLE 3--------------
```yaml
Start-SPOUserAndContentMove -UserPrinciplName username@contoso.com -DestinationDataLocation EUR
```

This will move the user username@contoso.com from the current location, example NA to the European Site (EUR)



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
{{Fill Reserved Description}}

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
{{Fill ValidationOnly Description}}

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).



## RELATED LINKS

[Introduction to the SharePoint Online management shell]()

[Set up the SharePoint Online Management Shell Windows PowerShell environment]()

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[Stop-SPOUserAndContentMove](Stop-SPOUserAndContentMove.md)
