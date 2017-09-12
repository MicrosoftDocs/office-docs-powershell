---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Update-SPDistributedCacheSize

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

{{Fill in the Synopsis}}



## SYNTAX

```
Update-SPDistributedCacheSize [-CacheSizeInMB] <UInt32> [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:**SharePoint Server 2013

Use the Update-SPDistributedCacheSize cmdlet to allocate memory to the Distributed cache service.

**Below Content Applies To:**SharePoint Server 2016

{{Fill in the Description}}



## EXAMPLES

### -------------EXAMPLE---------- (SharePoint Server 2013)
```
C:\PS>Update-SPDistributedCacheSize -CacheSizeInMB 2048
```

### Example 1 (SharePoint Server 2016)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -CacheSizeInMB
**Below Content Applies To:**SharePoint Server 2013

Specifies the memory size in megabytes (MB) that you want to allocate to the Distributed Cache service.
The default value is 5 percent of total system random access memory (RAM).
This value should not be more than 40 percent of total system RAM with a maximum limit of 16 gigabytes (GB).



**Below Content Applies To:**SharePoint Server 2016

{{Fill CacheSizeInMB Description}}



```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AssignmentCollection
**Below Content Applies To:**SharePoint Server 2013

Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.



**Below Content Applies To:**SharePoint Server 2016

{{Fill AssignmentCollection Description}}



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

### System.UInt32
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

