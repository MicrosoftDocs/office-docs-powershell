---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Add-SPThrottlingRule
schema: 2.0.0
---

# Add-SPThrottlingRule

## SYNOPSIS

Adds a new throttling rule.



## SYNTAX

```
Add-SPThrottlingRule [-RequestManagementSettings] <SPRequestManagementSettingsPipeBind> [-Name] <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-Criteria <SPRequestManagementRuleCriteriaPipeBind[]>]
 [-Expiration <DateTime>] [-Threshold <Int32>] [<CommonParameters>]
```

## DESCRIPTION
The Add-SPThrottlingRule cmdlet adds a new throttling rule for the farm by using the Name and RequestManagementSettings parameters.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### -----------EXAMPLE--------- 
```
PS C:\>$web=Get-SPWebApplication -Identity <URL of web application>
PS C:\>$rm=Get-SPRequestManagementSettings -Identity $web
PS C:\>$c=New-SPRequestManagementRuleCriteria -Value http -Property url -MatchType startswith -CaseSensitive $false
PS C:\>Add-SPThrottlingRule -RequestManagementSettings $rm -Name <Rule Name> -Criteria $c -Threshold 4
```

This example adds a throttling rule for a specified identity by using the $rm and $c variables.

## PARAMETERS

### -RequestManagementSettings
Specifies the name of the request management settings object to add.

```yaml
Type: SPRequestManagementSettingsPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Name
Specifies the name of the throttling rule.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Criteria
Specifies the criteria for the rule to match.

```yaml
Type: SPRequestManagementRuleCriteriaPipeBind[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Expiration
Specifies the expiration date and time of the rule.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Threshold
Specifies a value between 0 and 10 which defines the maximum threshold for throttling.
The Request Manager will remove routing targets if their Health-Score becomes greater than this value.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-SPThrottlingRule](Get-SPThrottlingRule.md)

[Remove-SPThrottlingRule](Remove-SPThrottlingRule.md)

[Set-SPThrottlingRule](Set-SPThrottlingRule.md)

