---
external help file: Find-CsGroup.xml
applicable: Skype for Business Online
title: Find-CsGroup
schema: 2.0.0
---

# Find-CsGroup

## SYNOPSIS
Use the Find-CsGroup cmdlet to search groups.

## SYNTAX

```
Find-CsGroup [-Tenant <Guid>] -SearchQuery <String> [-MaxResults <UInt32>] [-ExactMatchOnly <Boolean>] 
[-Force] [<CommonParameters>]
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
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExactMatchOnly
The ExactMatchOnly parameter instructs the cmdlet to return exact matches only. The default value is false.

```yaml
Type: Boolean
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
Type: UInt32
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
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
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
Indicates that this cmdlet runs as a background job.

When you specify the AsJob parameter, the command immediately returns an object that represents the background job. You can continue to work in the session while the job finishes. The job is created on the local computer and the results from the Skype for Business Online session are automatically returned to the local computer. To get the job results, use the Receive-Job cmdlet.

For more information about Windows PowerShell background jobs, see [about_Jobs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_jobs?view=powershell-6) and [about_Remote_Jobs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_remote_jobs?view=powershell-6).

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

