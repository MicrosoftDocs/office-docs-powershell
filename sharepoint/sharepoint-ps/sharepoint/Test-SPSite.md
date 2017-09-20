---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Test-SPSite

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Activates the RunTests method against a referenced SPSite object.



## SYNTAX

```
Test-SPSite [-Identity] <SPSitePipeBind> [-AssignmentCollection <SPAssignmentCollection>] [-RuleId <Guid>]
 [-RunAlways] [<CommonParameters>]
```

## DESCRIPTION
The Test-SPSite cmdlet runs one or all site collection health checks on the site collection and its contents.
This cmdlet reports the rules which were run and provides a summary of the results.

To run tests in repair mode, use the Repair-SPSite cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE 1------------ (SharePoint Server 2013)
```
C:\PS>Test-SPSite http://<site name>/sites/testsite
```

This example runs all the site collection health checks on the http://\<site name\>/sites/testsite site collection.

### --------------EXAMPLE 1------------ (SharePoint Server 2016)
```
C:\PS>Test-SPSite http://<site name>/sites/testsite
```

This example runs all the site collection health checks on the http://\<site name\>/sites/testsite site collection.

### --------------EXAMPLE 2------------ (SharePoint Server 2013)
```
C:\PS>Test-SPSite http://<site name</sites/testsite -Rule "ee967197-ccbe-4c00-88e4-e6fab81145e1"
```

This example runs just the "Missing Galleries Check" on the http://\<site name\>/sites/testsite site collection.

### --------------EXAMPLE 2------------ (SharePoint Server 2016)
```
C:\PS>Test-SPSite http://<site name</sites/testsite -Rule "ee967197-ccbe-4c00-88e4-e6fab81145e1"
```

This example runs just the "Missing Galleries Check" on the http://\<site name\>/sites/testsite site collection.

## PARAMETERS

### -Identity
Specifies the URL or GUID of the site to run a test.

```yaml
Type: SPSitePipeBind
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

### -RuleId
Specifies one specific site health rule to run.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RunAlways
Forces a rule to run even if a health check was run.

```yaml
Type: SwitchParameter
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

[Repair-SPSite]()

