---
external help file: sharepoint.xml
online version: http://technet.microsoft.com/EN-US/library/26d6e44c-a606-47a1-a3e0-c4919670f684(Office.15).aspx
schema: 2.0.0
---

# Get-SPInfoPathWebServiceProxy

## SYNOPSIS
Returns the Web proxy settings for the Web application.

## SYNTAX

```
Get-SPInfoPathWebServiceProxy [-Identity] <SPWebServiceProxyPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>]
```

## DESCRIPTION
The Get-SPInfoPathWebServiceProxy cmdlet reads the Web proxy settings for the SharePoint Web application specified in Identity.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE----------------- (SharePoint Server 2013)
```
C:\PS>Get-SPInfoPathWebServiceProxy -Identity "http://server_name"
```

This example displays the Web service proxy settings for a specified Web application.

### --------------EXAMPLE----------------- (SharePoint Server 2016)
```
C:\PS>Get-SPInfoPathWebServiceProxy -Identity "http://server_name"
```

This example displays the Web service proxy settings for a specified Web application.

## PARAMETERS

### -Identity
Specifies the SharePoint Web application to get.

The type must be a valid URL, in the form http://server_name, or a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh.

```yaml
Type: SPWebServiceProxyPipeBind
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

