---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Get-SPEnterpriseSearchPropertyRule
schema: 2.0.0
---

# Get-SPEnterpriseSearchPropertyRule

## SYNOPSIS
Returns a property rule instance, which can be used in result item types.

## SYNTAX

```
Get-SPEnterpriseSearchPropertyRule [-PropertyName] <String> [-Operator] <DefaultOperator>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPEnterpriseSearchPropertyRule cmdlet returns an instance of a property rule, given the specified condition.
The value for the condition is set in a separate step.
Such a rule can be used in result item types, to group the results based on the condition of a result property.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------EXAMPLE-------- 
```
C:\PS>$rule = Get-SPEnterpriseSearchPropertyRule -PropertyName "ContentTypeId" -Operator "StartsWith"
$rule.AddValue( "0x010063C2F478ACC511DFB869B5BFDFD720851252" )
```

This example returns a rule for the property "ContentTypeId", where the condition is that the property shall start with a specific value.
The second step specifies the value that the property shall start with.

## PARAMETERS

### -PropertyName
Specifies the name of the property that the rule concerns.

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

### -Operator
Specifies the operation to apply to the property, for example "Starts with".

```yaml
Type: DefaultOperator
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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

[Get-SPEnterpriseSearchPropertyRuleCollection](Get-SPEnterpriseSearchPropertyRuleCollection.md)

