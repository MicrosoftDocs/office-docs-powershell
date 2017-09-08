---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# New-SPAzureAccessControlServiceApplicationProxy

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
New-SPAzureAccessControlServiceApplicationProxy -MetadataServiceEndpointUri <String> -Name <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-DefaultProxyGroup] [-WhatIf]
```

## DESCRIPTION
Use the New-SPAzureAccessContrlServiceApplicationProxy cmdlet to create a new service application proxy group for the Azure Control service application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE-------------- (SharePoint Server 2013)
```
C:\PS>New-SPAzureAccessControlServiceApplicationProxy -Name "ACS" -metadataEndpointUri "http://test" -DefaultProxyGroup
```

This example creates a proxy group named ACS which will be added to the default proxy group.

### --------------EXAMPLE-------------- (SharePoint Server 2016)
```
C:\PS>New-SPAzureAccessControlServiceApplicationProxy -Name "ACS" -metadataEndpointUri "http://test" -DefaultProxyGroup
```

This example creates a proxy group named ACS which will be added to the default proxy group.

## PARAMETERS

### -MetadataServiceEndpointUri
Specifies the URL of the Azure Access Control Service's metadata document.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Specifies the name of the proxy that you want to create.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
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

### -DefaultProxyGroup
Specifies whether the proxy needs to be added to the default proxy group.

We recommend that you add the proxy to the default proxy group.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

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

