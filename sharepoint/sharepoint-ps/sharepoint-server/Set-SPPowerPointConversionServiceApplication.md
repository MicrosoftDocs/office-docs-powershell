---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Set-SPPowerPointConversionServiceApplication
schema: 2.0.0
---

# Set-SPPowerPointConversionServiceApplication

## SYNOPSIS
Configures settings for a PowerPoint Conversion Service application.


## SYNTAX

```
Set-SPPowerPointConversionServiceApplication [-Identity] <SPPowerPointConversionServiceApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-CacheExpirationPeriodInSeconds <UInt32>]
 [-MaximumConversionsPerWorker <UInt32>] [-WorkerKeepAliveTimeoutInSeconds <UInt32>]
 [-WorkerProcessCount <UInt32>] [-WorkerTimeoutInSeconds <UInt32>] [<CommonParameters>]
```

## DESCRIPTION
Use the `Set-SPPowerPointConversionServiceApplication` cmdlet to set properties and settings for an instance of a PowerPoint Conversion Service application that is in a farm.


## EXAMPLES

### --------------------EXAMPLE 1---------------------
```
PS C:\>Set-SPPowerPointConversionServiceApplication -Identity "MyWorkgroupPPTApp" -CacheExpirationPeriodInSeconds 1200
```

This example establishes new operational defaults for the conversion cache expiration.


### --------------------EXAMPLE 2---------------------
```
PS C:\>Set-SPPowerPointConversionServiceApplication -Identity "MyWorkgroupPPTApp" -DisableBinaryScan:$false
```

This example disables binary scanning of documents.


## PARAMETERS

### -Identity
Specifies the unique name of this PowerPoint Conversion Service application.

```yaml
Type: SPPowerPointConversionServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -CacheExpirationPeriodInSeconds
Specifies the maximum time, in seconds, that items remain in the back-end server cache.
The default value is 600 seconds (10 minutes).

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumConversionsPerWorker
Specifies the maximum number of presentations that a conversion worker process can convert before recycling.
The default value is 5.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WorkerKeepAliveTimeoutInSeconds
Specifies the maximum time, in seconds, that a conversion worker process can be unresponsive before being terminated.
The default value is 120 seconds.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WorkerProcessCount
Specifies the number of active instances of the conversion worker process on each back-end.
This value must be less than the Windows Communication Foundation (WCF) connection limit for this computer.
The default value is 3.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WorkerTimeoutInSeconds
Specifies the maximum time, in seconds, that a conversion worker process is given for any single conversion.
The default is 300 seconds (5 minutes).

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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

[New-SPPowerPointConversionServiceApplication](New-SPPowerPointConversionServiceApplication.md)

[New-SPPowerPointConversionServiceApplicationProxy](New-SPPowerPointConversionServiceApplicationProxy.md)
