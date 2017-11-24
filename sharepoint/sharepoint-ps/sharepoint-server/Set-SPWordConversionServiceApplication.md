---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Set-SPWordConversionServiceApplication
schema: 2.0.0
---

# Set-SPWordConversionServiceApplication

## SYNOPSIS
Sets properties of a Word Automation Services application.

## SYNTAX

```
Set-SPWordConversionServiceApplication [-Identity] <WordServiceApplicationPipeBind> [-ActiveProcesses <Int32>]
 [-AddSupportedFormats <String[]>] [-ApplicationPool <SPIisWebServiceApplicationPoolPipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>] [-ClearSupportedFormats] [-Confirm]
 [-ConversionsPerInstance <Int32>] [-ConversionTimeout <Int32>] [-DatabaseCredential <PSCredential>]
 [-DatabaseName <String>] [-DatabaseServer <String>] [-DisableBinaryFileScan] [-DisableEmbeddedFonts]
 [-KeepAliveTimeout <Int32>] [-MaximumConversionAttempts <Int32>] [-MaximumConversionTime <Int32>]
 [-MaximumMemoryUsage <Int32>] [-RecycleProcessThreshold <Int32>] [-RemoveSupportedFormats <String[]>]
 [-TimerJobFrequency <Int32>] [-WhatIf] [-MaximumGroupSize <Int32>] [-MaximumSyncConversionRequests <Int32>]
 [<CommonParameters>]
```

## DESCRIPTION
The `Set-SPWordConversionServiceApplication` cmdlet sets global properties of a Word Automation Services application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### -----------EXAMPLE-----------------
```
C:\PS>Get-SPServiceApplication -Name WordServices1 | Set-SPWordConversionServiceApplication -TimerJobFrequency 30
```

This example sets the timer job frequency of the WordServices1 application to 30 minutes.


## PARAMETERS

### -Identity
Specifies the Word Automation Services application to update.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a Word Automation Services application (for example, WordSvcApp1); or an instance of a valid SPServiceApplication object.

```yaml
Type: WordServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -ActiveProcesses
Specifies the number of conversion processes on each machine on which the service application runs.
This value is equivalent to the number of simultaneous conversions.
The default value is 8.

The type must be a valid integer in the range from 1 to 1000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddSupportedFormats
Specifies a set of file formats to be enabled for use by the service application.

The value must be a comma-delimited list of one or more of the following: docx, doc, mht, rtf, xml.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationPool
Specifies the existing IIS managed application pool in which this instance of Word Automation Services runs.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of an application pool (for example, AppPoolName1); or an instance of a valid IISWebServiceApplicationPool object.

```yaml
Type: SPIisWebServiceApplicationPoolPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
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
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

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

### -ClearSupportedFormats
Specifies that all file formats should be disabled for use by the service application.

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

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConversionsPerInstance
Specifies the number of items sent to each conversion process (see the ActiveProcesses parameter description earlier in this table) every time the timer job is run.
The default value is 12.

The type must be a valid integer.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConversionTimeout
Specifies the time, in minutes, after which a conversion that is marked InProgress is confirmed to be still running each time the timer job runs and if necessary, the conversion is restarted.
The default value is 5.

The type must be a valid integer in the range from 1 to 60.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseCredential
Specifies the credentials to use for connecting to the database for the Word Automation Services application.
Use this parameter only if SQL Authentication is used to access the service application database.

When the DatabaseCredential parameter is specified, the DatabaseName and DatabaseServer parameters are required.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseName
Specifies the name of the database to use for this instance of the Word Automation Services application.

The type must be a valid SQL database name; for example, MetadataDB1.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseServer
Specifies the name of the host server for the Word Automation Services database.

The type must be a valid SQL database server host name; for example, SQLServerHost1.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableBinaryFileScan
Specifies whether additional checks are run when Word documents are processed.
Turn this setting off only if all documents processed by the service are trusted.

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

### -DisableEmbeddedFonts
Specifies whether embedded fonts are ignored when present in input documents.

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

### -KeepAliveTimeout
Specifies the length of time, in seconds, that a conversion can be non-responsive before it is terminated.
The default value is 30.

The type must be a valid integer in the range from 10 to 60.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumConversionAttempts
The maximum number of conversion attempts before a conversion is marked with status "Failed".
The default value is 2.

The type must be a valid integer in the range from 1 to 10.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumConversionTime
Specifies the maximum length of time, in seconds, that a conversion can run before it is terminated.
The default value is 300.

The type must be a valid integer in the range from 60 to MaxInt.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumMemoryUsage
Specifies the maximum percentage of system memory which can be used by the service application.
The default value is 100.

The type must be a valid integer in the range from 10 to 100.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecycleProcessThreshold
Specifies the number of documents which are converted before a conversion process is recycled.
For additional information about the conversion process, see the ActiveProcess parameter description earlier in this table.

The type must be a valid integer in the range from 1 to 1000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveSupportedFormats
Specifies a set of file formats to be disabled for use by the service application.

The value must be a comma delimited list of one or more of the following: docx, doc, mht, rtf, xml.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimerJobFrequency
Specifies the frequency, in minutes, with which the timer job for this service application runs.
The default value is 15.

The type must be a valid integer in the range from 1 to 59.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumGroupSize
{{Fill MaximumGroupSize Description}}

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumSyncConversionRequests
{{Fill MaximumSyncConversionRequests Description}}

```yaml
Type: Int32
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
