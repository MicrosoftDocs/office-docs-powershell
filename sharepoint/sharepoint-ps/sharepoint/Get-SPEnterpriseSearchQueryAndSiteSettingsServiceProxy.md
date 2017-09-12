---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Get-SPEnterpriseSearchQueryAndSiteSettingsServiceProxy

## SYNOPSIS
Returns the search manager service proxy.

## SYNTAX

```
Get-SPEnterpriseSearchQueryAndSiteSettingsServiceProxy [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-SPEnterpriseSearchQueryAndSiteSettingsServiceProxy cmdlet reads the SearchQueryAndSiteSettingsServiceProxy object when a search Web service manager service is started or stopped.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
$qssSvcProxy = Get-SPEnterpriseSearchQueryAndSiteSettingsServiceProxy
```

This example obtains a reference to the query and site settings service proxy.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>$qssSvcProxy = Get-SPEnterpriseSearchQueryAndSiteSettingsServiceProxy
```

This example obtains a reference to the query and site settings service proxy.

## PARAMETERS

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

[Online Version](http://technet.microsoft.com/EN-US/library/08f5f0f9-4319-4faf-9468-7e0cd7aef9a4(Office.15).aspx)

