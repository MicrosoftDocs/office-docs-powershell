---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Export-CsArchivingData
schema: 2.0.0
---

# Export-CsArchivingData

## SYNOPSIS
Enables you to export records that have been stored in the Skype for Business Server Archiving database.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### ExcludeWebConfArchiveSet
```
Export-CsArchivingData -DBInstance <String> -OutputFolder <String> -StartDate <DateTime> [-EndDate <DateTime>]
 [-UserUri <String>] [-ExcludeWebConfArchive] [-WhatIf] [-Confirm] [-IncludeTrustedApplication]
 -Identity <XdsIdentity> [-Force] [-Purge] [<CommonParameters>]
```

### PurgeSet
```
Export-CsArchivingData -DBInstance <String> -OutputFolder <String> -StartDate <DateTime> [-EndDate <DateTime>]
 [-UserUri <String>] [-Purge] [-WhatIf] [-Confirm] [-IncludeTrustedApplication] -Identity <XdsIdentity>
 [-ExcludeWebConfArchive] [-Force] [<CommonParameters>]
```

### ByDbInstance
```
Export-CsArchivingData -DBInstance <String> -OutputFolder <String> -StartDate <DateTime> [-Confirm]
 [-EndDate <DateTime>] [-ExcludeWebConfArchive] [-Force] [-IncludeTrustedApplication] [-Purge]
 [-UserUri <String>] [-WhatIf] [<CommonParameters>]
```

### ByIdentity
```
Export-CsArchivingData -Identity <XdsIdentity> -OutputFolder <String> -StartDate <DateTime> [-Confirm]
 [-EndDate <DateTime>] [-ExcludeWebConfArchive] [-Force] [-IncludeTrustedApplication] [-Purge]
 [-UserUri <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Many organizations find it useful to keep a transcript of all the instant messaging (IM) sessions carried out by their users.
Other organizations find it mandatory to keep such transcripts.
For example, organizations in the financial world are often required by law to keep copies of all their electronic communications.

Regardless of the reason, Skype for Business Server gives you flexibility when it comes to archiving IM and conferencing sessions.
If you have deployed Archiving Server, you can use the various CsArchivingConfiguration cmdlets to enable and disable instant message archiving and to manage your Archiving database.
You can also suspend IM should archiving fail, which helps ensure that you keep a record of all your electronic communications.

If you have enabled archiving, records of your users' electronic communications are stored in the Archiving database.
If you would like to view all of these records (or a selected subset of these records), you can use the Export-CsArchivingData cmdlet to extract these records from the database and save them as an Outlook Express Electronic Mail (EML) file (.EML file extension).

By default, members of the following groups are authorized to run the Export-CsArchivingData cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Export-CsArchivingData"}`

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Export-CsArchivingData -Identity "ArchivingDatabase:atl-sql-001.litwareinc.com" -StartDate 6/1/2018 -OutputFolder "C:\ArchivingExports"
```

The command shown in Example 1 extracts records from the Archiving database located on the server atl-sql-001.litwareinc.com, and then saves the resulting EML file to the folder C:\ArchivingExports.
The specified start date of June 1, 2018 (-StartDate 6/1/2018) ensures that only items recorded in the database after 5/31/2018 will be exported.

### -------------------------- Example 2 --------------------------
```
Export-CsArchivingData -Identity "ArchivingDatabase:atl-sql-001.litwareinc.com" -StartDate 6/1/2018 -OutputFolder "C:\ArchivingExports" -UserUri "kenmyer@litwareinc.com"
```

Example 2 is a variation of the command shown in Example 1; in this case, however, only the records pertaining to the user Ken Myer are exported.
To limit your export to records pertaining to a single user, include the UserUri parameter followed by appropriate SIP address.

### -------------------------- Example 3 --------------------------
```
Export-CsArchivingData -Identity "ArchivingDatabase:atl-sql-001.litwareinc.com" -StartDate 6/1/2018 -EndDate 6/30/2018 -OutputFolder "C:\ArchivingExports"
```

Example 3 represents another variation of the command shown in Example 1.
In Example 3, however, only items recorded in the database during the month of June, 2018 are exported.
To limit exporting to this time interval, the EndDate parameter is included along with the StartDate parameter.
With a start date of June 1, 2018 and an end date of June 30, 2018, exporting is limited to items recorded during June 2018.


## PARAMETERS

### -DBInstance
This parameter is intended for use only with Microsoft Lync Server 2010.If you are using the Export-CsArchivingData cmdlet on Skype for Business Server you should use the Identity parameter instead.

Path to the SQL Server database instance where archiving data is recorded.
For example: 
`"atl-sql-001\Archinst"`

```yaml
Type: String
Parameter Sets: ExcludeWebConfArchiveSet, PurgeSet, ByDbInstance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutputFolder
Full path to the folder where the exported data should be stored (for example, C:\ArchivingExports).
If this folder does not exist, then the Export-CsArchivingData cmdlet will create it.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate
Indicates the earliest activity date for the records to be exported.
For example, if you set the start date to 6/1/2018 (June 1, 2018, in U.S.
English) any items recorded in the database prior to that date (for example, items recorded on May 31, 2018) will be excluded from the export.

Use the date-time formats specified by your Regional and Language Options settings when assigning values to the StartDate and EndDate properties.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndDate
Indicates the latest activity date for records to be exported.
For example, if you set the end date to 6/1/2018 (June 1, 2018, in U.S.
English) any items recorded in the database after that date (for example, items recorded on June 2, 2018) will be excluded from the export.
Although you will not receive an error message, your export will fail if the end date occurs before the start date (for example, an end date of 1/1/2018 and a start date of 6/1/2018).

Use the date-time formats specified by your Regional and Language Options settings when assigning values to the StartDate and EndDate properties.

If an end date is not specified then the current date will be used.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserUri
Enables you to export archiving data for a single user; this is done by using the UserUri parameter and specifying the SIP address of the user.
The UserUri parameter will accept only one URI at a time.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeWebConfArchive
Instructs the Export-CsArchivingData cmdlet to only export instant messaging records.
By default, the cmdlet exports both IM and conferencing records.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Purge
When included, the Purge parameter causes any record that has been successfully exported to be deleted from the Archiving database.
If you do not include this parameter, exported records will be retained in the database.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeTrustedApplication
Include data logged by trusted applications (CAA/CAS) when exporting records.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Service identity of the archiving database to be exported.
For example:

`-Identity "ArchivingDatabase:atl-sql-001.litwareinc.com"`

You can also specify the database by using just the pool name:

`-Identity "atl-sql-001.litwareinc.com"`

You can retrieve the service identities for your archiving databases by using this command:

`Get-CsService -ArchivingDatabase | Select-Object Identity`

```yaml
Type: XdsIdentity
Parameter Sets: ExcludeWebConfArchiveSet, PurgeSet, ByIdentity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None


## OUTPUTS

### 
The Export-CsArchivingData cmdlet returns Archiving database records in EML format.


## NOTES


## RELATED LINKS

[Get-CsArchivingConfiguration](Get-CsArchivingConfiguration.md)

