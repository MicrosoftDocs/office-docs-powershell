---
applicable: Microsoft Teams
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/find-csgroup
schema: 2.0.0
title: Find-CsGroup
---

# Find-CsGroup

## SYNOPSIS
Use the Find-CsGroup cmdlet to search groups.

## SYNTAX

```
Find-CsGroup [-Tenant <Guid>] -SearchQuery <String> [-MaxResults <UInt32>] [-ExactMatchOnly <Boolean>] [-MailEnabledOnly <Boolean>]
[-Force] [<CommonParameters>]
```

## DESCRIPTION
The Find-CsGroup cmdlet lets you search groups in the Azure Address Book Service (AABS).

## EXAMPLES

### Example 1
```
Find-CsGroup -SearchQuery "Contoso Group" -MaxResults 5
```

This example finds and displays up to five groups that match the "Contoso Group" search query.

### Example 2
```
Find-CsGroup -SearchQuery "ed0d1180-169e-47c7-b718-bf9e60543914" -ExactMatchOnly $true
```

This example finds and displays only those groups that are an exact match to the search query.

## PARAMETERS

### -ExactMatchOnly
The ExactMatchOnly parameter instructs the cmdlet to return exact matches only. The default value is false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailEnabledOnly
Instructs the cmdlet to return mail enabled only groups.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxResults
The MaxResults parameter identifies the maximum number of results to return. If this parameter is not provided, the default is value is 10.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchQuery
The SearchQuery parameter defines a search query to search the display name or the sip address or the GUID of groups. This parameter accepts partial search query. The search is not case sensitive.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

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

### Microsoft.Rtc.Management.Hosted.Group.Models.GroupModel
The Find-CsGroup cmdlet returns a list of Microsoft.Rtc.Management.Hosted.Group.Models.GroupModel. Microsoft.Rtc.Management.Hosted.Group.Models.GroupModel contains Id and DisplayName.

## NOTES

## RELATED LINKS
