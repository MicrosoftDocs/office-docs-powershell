---
external help file: 
applicable: Skype for Business Online
schema: 2.0.0
---

# Find-CsGroup

## SYNOPSIS
Use the Find-CsGroup cmdlet to search groups.

## SYNTAX

```
Find-CsGroup [-SearchQuery <Object>] [-BypassDualWrite <Object>] [-ExactMatchOnly <Object>] [-Force]
 [-MaxResults <Object>] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
The Find-CsGroup cmdlet lets you search groups in the Azure Address Book Service (AABS).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Find-CsGroup -SearchQuery "Contoso Group" -MaxResults 5
```

This example finds and displays up to five groups that match the "Contoso Group" search query.

### -------------------------- Example 2 --------------------------
```
Find-CsGroup -SearchQuery "ed0d1180-169e-47c7-b718-bf9e60543914" -ExactMatchOnly $true
```

This example finds and displays only those groups that are an exact match to the search query.

## PARAMETERS

### -SearchQuery
The SearchQuery parameter defines a search query to search the display name or the sip address or the GUID of groups. This parameter accepts partial search query. The search is not case sensitive.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
PARAMVALUE: $true | $false

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExactMatchOnly
The ExactMatchOnly parameter instructs the cmdlet to return exact matches only. The default value is false.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxResults
The MaxResults parameter identifies the maximum number of results to return. If this parameter is not provided, the default is value is 10.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
PARAMVALUE: Guid

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.Group.Models.GroupModel
The Find-CsGroup cmdlet returns a list of Microsoft.Rtc.Management.Hosted.Group.Models.GroupModel. Microsoft.Rtc.Management.Hosted.Group.Models.GroupModel contains Id and DisplayName. 


## NOTES


## RELATED LINKS