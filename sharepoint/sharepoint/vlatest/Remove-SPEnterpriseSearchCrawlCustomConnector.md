---
external help file: sharepoint.xml
online version: http://technet.microsoft.com/EN-US/library/deeb7740-bcb8-45d8-a611-e581dfe8b118(Office.15).aspx
schema: 2.0.0
---

# Remove-SPEnterpriseSearchCrawlCustomConnector

## SYNOPSIS
Removes a CustomConnector object.

## SYNTAX

```
Remove-SPEnterpriseSearchCrawlCustomConnector -Identity <SPCustomConnectorPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
 -SearchApplication <SearchServiceApplicationPipeBind>
```

## DESCRIPTION
The Get-SPEnterpriseSearchCrawlCustomConnector selects the custom connector or connectors, and then pipes them to the Remove-SPEnterpriseSearchCrawlCustomConnector cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------------EXAMPLE------------------ (SharePoint Server 2013)
```
Get-SPEnterpriseSearchCrawlCustomConnector -SearchApplication MySearchServiceApp" -Identity "dctm://" | Remove-SPEnterpriseSearchCrawlCustomConnector
```

This example removes a custom connector for the dctm:// protocol from the MySearchServiceApp search service application.

### --------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>Get-SPEnterpriseSearchCrawlCustomConnector -SearchApplication MySearchServiceApp" - Identity "dctm://" | Remove-SPEnterpriseSearchCrawlCustomConnector
```

This example removes a custom connector for the dctm://  protocol from the MySearchServiceApp search service application.

## PARAMETERS

### -Identity
Specifies the CustomConnector object to remove.
The Identity parameter must be an instance of a valid CustomConnector object.

```yaml
Type: SPCustomConnectorPipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
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

### -SearchApplication
{{Fill SearchApplication Description}}

```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/deeb7740-bcb8-45d8-a611-e581dfe8b118(Office.15).aspx)

