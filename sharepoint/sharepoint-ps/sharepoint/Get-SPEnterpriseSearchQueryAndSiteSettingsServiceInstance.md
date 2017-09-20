---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Get-SPEnterpriseSearchQueryAndSiteSettingsServiceInstance

## SYNOPSIS
Returns the service manager service instance.

## SYNTAX

```
Get-SPEnterpriseSearchQueryAndSiteSettingsServiceInstance
 [[-Identity] <SearchQueryAndSiteSettingsServiceInstancePipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>] [-Local] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPEnterpriseSearchQueryAndSiteSettingsServiceInstance cmdlet returns the service manager service instance when a search manager service is started or stopped.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1------------------ (SharePoint Server 2013)
```
$qqssSvcInstance = Get-SPEnterpriseSearchQueryAndSiteSettingsServiceInstance -Local
```

This example obtain a reference to the query and site setting service instance on the local farm.

### ------------------EXAMPLE 1------------------ (SharePoint Server 2016)
```
C:\PS>$qqssSvcInstance = Get-SPEnterpriseSearchQueryAndSiteSettingsServiceInstance -Local
```

This example obtain a reference to the query and site setting service instance on the local farm.

### ------------------EXAMPLE 2------------------ (SharePoint Server 2013)
```
$qssSvcInstance = Get-SPEnterpriseSearchQueryAndSiteSettingsServiceInstance -Identity myServer
```

This example obtain a reference to the query and site setting service instance from a specific server name.

### ------------------EXAMPLE 2------------------ (SharePoint Server 2016)
```
C:\PS>$qssSvcInstance = Get-SPEnterpriseSearchQueryAndSiteSettingsServiceInstance -Identity myServer
```

This example obtain a reference to the query and site setting service instance from a specific server name.

## PARAMETERS

### -Identity
Specifies the search manager service instance to get.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid server name on which search manager service instance runs; or an instance of a valid SearchManagerServiceInstance object.

```yaml
Type: SearchQueryAndSiteSettingsServiceInstancePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 1
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

### -Local
Specifies that the service manager service instance for the current search server is returned.

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

[Online Version](http://technet.microsoft.com/EN-US/library/f1438a74-92fb-498d-aac1-66743403f3bc(Office.15).aspx)

