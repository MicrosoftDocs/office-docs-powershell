---
external help file: sharepoint.xml
online version: http://technet.microsoft.com/EN-US/library/26d6e44c-a606-47a1-a3e0-c4919670f684(Office.15).aspx
schema: 2.0.0
---

# Get-SPHealthAnalysisRule

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Get-SPHealthAnalysisRule [-Identity] <SPHealthAnalysisRuleInstancePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

Use the Get-SPHealthAnalysisRule cmdlet to return a list of a health analyzer rules.
To return a specify health analyzer rule, use the Identity parameter; otherwise, all health analyzer rules will be returned.

The SPHealthAnalysisRule cmdlets were first introduced in the February 2011 Cumulative Update, which is available for download as follows:

--Description of the SharePoint Foundation 2010 Cumulative Update Server Hotfix Package (SharePoint Foundation server-package) (http://support.microsoft.com/kb/2475880)
--Description of the SharePoint Server 2010 Cumulative Update Server Hotfix Package (MOSS server-package (http://support.microsoft.com/kb/2475878)

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ---------------------EXAMPLE 1--------------------------- (SharePoint Server 2013)
```
C:\PS>Get-SPHealthAnalysisRule -Identity "CustomRule"
```

This example returns the health analyzer rule named CustomRule.

### ---------------------EXAMPLE 1--------------------------- (SharePoint Server 2016)
```
C:\PS>Get-SPHealthAnalysisRule -Identity "CustomRule"
```

This example returns the health analyzer rule named CustomRule.

## PARAMETERS

### -Identity
Specifies the name or GUID of the health analyzer rule to get.

The type must be a valid name, an instance of a valid SPHealthAnalysisRule object, or a valid GUID (for example, 12345678-90ab-cdef-1234-567890bcdefgh).

```yaml
Type: SPHealthAnalysisRuleInstancePipeBind
Parameter Sets: (All)
Aliases: 

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

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

