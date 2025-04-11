---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/new-teamchannel
title: New-TeamChannel
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# New-TeamChannel

## SYNOPSIS

Add a new channel to a team.

## SYNTAX

```
New-TeamChannel -GroupId <String> -DisplayName <String> [-Description <String>] [-MembershipType <String>] [-Owner <String>] [<CommonParameters>]
```

## DESCRIPTION

Add a new channel to a team.

## EXAMPLES

### Example 1
```
New-TeamChannel -GroupId 126b90a5-e65a-4fef-98e3-d9b49f4acf12 -DisplayName "Architecture"
```
Create a standard channel with display name as "Architecture"

### Example 2
```
New-TeamChannel -GroupId 126b90a5-e65a-4fef-98e3-d9b49f4acf12 -DisplayName "Engineering" -MembershipType Private
```
Create a private channel with display name as "Engineering"

## PARAMETERS

### -GroupId
GroupId of the team

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -DisplayName
Channel display name.
Names must be 50 characters or less, and can't contain the characters # % & * { } / \ : \< \> ? + | ' "

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Description
Channel description.
Channel description can be up to 1024 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -MembershipType
Channel membership type, Standard, Shared, or Private.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Owner
UPN of owner that can be specified while creating a private channel.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### GroupId, DisplayName, Description, MembershipType, Owner

## OUTPUTS

### Id

## NOTES

## RELATED LINKS
