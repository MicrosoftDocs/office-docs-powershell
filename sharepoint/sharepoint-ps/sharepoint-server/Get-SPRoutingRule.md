---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Get-SPRoutingRule
schema: 2.0.0
---

# Get-SPRoutingRule

## SYNOPSIS

Returns all routing rules.



## SYNTAX

```
Get-SPRoutingRule [-RequestManagementSettings] <SPRequestManagementSettingsPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Name <String>] [<CommonParameters>]
```

## DESCRIPTION
Use the Get-SPRoutingRule cmdlet to return routing rules for the farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE------------ 
```
C:\PS>$web=Get-SPWebApplication -Identity <URL of web application>

C:\PS>$rm=Get-SPRequestManagementSettings -Identity $web

C:\PS>Get-SPRoutingRule -RequestManagementSettings $rm
```

This example returns a routing rule for the farm.

## PARAMETERS

### -RequestManagementSettings
Specifies the name of the request management settings object to return.

```yaml
Type: SPRequestManagementSettingsPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
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

### -Name
Specifies the name of the rule to return.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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

[Add-SPRoutingRule]()

[Remove-SPRoutingRule]()

[Set-SPRoutingRule]()

