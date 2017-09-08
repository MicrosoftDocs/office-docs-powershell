---
external help file: sharepoint.xml
online version: http://technet.microsoft.com/EN-US/library/985591b0-951f-4274-aead-a184398bba41(Office.15).aspx
schema: 2.0.0
---

# Stop-SPEnterpriseSearchServiceInstance

## SYNOPSIS
Stops an instance of a search service.

## SYNTAX

```
Stop-SPEnterpriseSearchServiceInstance [-Identity] <SearchServiceInstancePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
```

## DESCRIPTION
Below Content Applies To: SharePoint Server 2013

This cmdlet stops an instance of a search service.

Before you can stop a search service instance, you must remove all search topology components on the associated server from the active topology.
This can be done in three ways:

- Removing components from the search topology. If there are items in the search index, see        Manage search components in SharePoint Server 2013and        Manage the index component in SharePoint Server 2013. If there are no items in the search index, see        Change the default search topology in SharePoint Server 2013. - Moving components to another server. If there are items in the search index, see        Manage search components in SharePoint Server 2013and        Manage the index component in SharePoint Server 2013. If there are no items in the search index, see        Change the default search topology in SharePoint Server 2013. - Removing the search service application. For more information, see        Remove-SPEnterpriseSearchServiceApplication Below Content Applies To: SharePoint Server 2016

This cmdlet stops an instance of a search service.

Before you can stop a search service instance, you must remove all search topology components on the associated server from the active topology. 
This can be done in three ways:

- Removing components from the search topology
- Moving components to another server.  For more information, see .
- Removing the search service application.  For more information, see Remove-SPEnterpriseSearchServiceApplication

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
Get-SPEnterpriseSearchServiceInstance -Local | Stop-SPEnterpriseSearchServiceInstance
```

This example stops the local search service instance.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>Get-SPEnterpriseSearchServiceInstance -Local | Stop-SPEnterpriseSearchServiceInstance
```

This example stops the local search service instance.

## PARAMETERS

### -Identity
Specifies the shared search service instance to stop.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a query server (for example, MyQueryServer); or an instance of a valid SearchServiceInstance object.

```yaml
Type: SearchServiceInstancePipeBind
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

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/985591b0-951f-4274-aead-a184398bba41(Office.15).aspx)

