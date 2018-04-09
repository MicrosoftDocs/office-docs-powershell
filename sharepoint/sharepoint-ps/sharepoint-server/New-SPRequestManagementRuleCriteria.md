---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: New-SPRequestManagementRuleCriteria
schema: 2.0.0
---

# New-SPRequestManagementRuleCriteria

## SYNOPSIS
Creates criteria for the rule to match.


## SYNTAX

### CustomPropertyParameterSet
```
New-SPRequestManagementRuleCriteria [-Value] <String> [-CustomHeader] <String> [-CaseSensitive]
 [[-MatchType] <SPRequestManagementRuleMatchType>] [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

### StandardParameterSet
```
New-SPRequestManagementRuleCriteria [-Value] <String> [-Property] <SPRequestManagementRulePropertyType>
 [-CaseSensitive] [[-MatchType] <SPRequestManagementRuleMatchType>]
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

Use the `New-SPRequestManagementRuleCriteria` cmdlet to create criteria for the rule to match.


## EXAMPLES

### ------------------EXAMPLE-----------------------
```
PS C:\>New-SPRequestManagementRuleCriteria -Property Host -Value Client01 -MatchType Equals
```

This example creates a new rule that matches the Host 'Client01'.

## PARAMETERS

### -Value
Specifies a value for the rule to match.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomHeader
Specifies the custom header for the rule.

```yaml
Type: String
Parameter Sets: CustomPropertyParameterSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Property
Specifies a header for a value to match.

The following are the valid values:

--Url

--Urlreferrer

--UserAgent

--Host

--IP

--HttpMethod

--SoapAction

--CustomHeader

```yaml
Type: SPRequestManagementRulePropertyType
Parameter Sets: StandardParameterSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CaseSensitive
Specifies whether or not the match is case sensitive.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MatchType
Defines operators for the match.

The following are the valid values:

--Equals

--Regex

--StartsWith

--EndsWith

```yaml
Type: SPRequestManagementRuleMatchType
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 3
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
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-SPRequestManagementSettings](Get-SPRequestManagementSettings.md)

[Set-SPRequestManagementSettings](Set-SPRequestManagementSettings.md)
