---
external help file: sharepointserver.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/get-spenterprisesearchpropertyrulecollection
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Get-SPEnterpriseSearchPropertyRuleCollection
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Get-SPEnterpriseSearchPropertyRuleCollection

## SYNOPSIS
Returns the collection of rules that are applied to search results.

## SYNTAX

```
Get-SPEnterpriseSearchPropertyRuleCollection [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-SPEnterpriseSearchPropertyRuleCollection cmdlet returns the collection of rules that are applied to search results.
Rules can be added and removed from the rule collection.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).

## EXAMPLES

### --------EXAMPLE-------- 
```
$rule = Get-SPEnterpriseSearchPropertyRule -PropertyName 'ContentTypeId' -Operator 'StartsWith'
$rule.AddValue('0x010063C2F478ACC511DFB869B5BFDFD720851252')
$ruleCollection = Get-SPEnterpriseSearchPropertyRuleCollection
$ruleCollection.Add($rule)
```

This example returns a rule for the result property "ContentTypeId", the rule specifies that this property must start with the value "0x010063C2F478ACC511DFB869B5BFDFD720851252".

Thereafter the example returns the rule collection, and adds the rule to the rule collection.

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-SPEnterpriseSearchPropertyRule](Get-SPEnterpriseSearchPropertyRule.md)

