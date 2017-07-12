---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsAdServerSchema

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns information indicating whether your Active Directory schema has been correctly configured to allow for the installation of Microsoft Lync Server 2010.

**Below Content Applies To:** Lync Server 2013

Returns information indicating whether your Active Directory schema has been correctly configured to allow for the installation of Lync Server.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Returns information indicating whether your Active Directory schema has been correctly configured to allow for the installation of Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Get-CsAdServerSchema [-Report <String>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Lync Server 2010 cannot be installed until your Active Directory schema has been properly extended; that means that objects and attributes specific to Lync Server must be added to Active Directory Domain Services (AD DS) before installation can take place.
For example, user account objects must be modified to allow for attributes that do such things as indicate the voice policy assigned to a user or report whether or not that account has been enabled for Enterprise Voice.

The Get-CsAdServerSchema cmdlet returns a single value that tells you whether or not Active Directory has been extended and is prepared for the installation of Lync Server.
If Get-CsAdServerSchema returns the value SCHEMA_VERSION_STATE_CURRENT, the schema has been extended.
If the cmdlet returns any other value, then the schema has not been extended.

Get-CsAdServerSchema typically runs as part of the Setup Wizard; if Setup determines that the schema is not correctly prepared, you will receive an error message and Setup will stop.
However, you can also run Get-CsAdServerSchema independently of the Setup Wizard, giving you the opportunity to verify the schema status before you try to install Lync Server.

Get-CsAdServerSchema performs the same function as the following Microsoft Office Communications Server 2007 R2 command: Lcscmd.exe /domain /action:CheckSchemaPrepState.

Who can run this cmdlet: By default, any user who has read permissions to Active Directory can run the Get-CsAdServerSchema cmdlet locally.
Typically all domain members have this permission.

**Below Content Applies To:** Lync Server 2013

Lync Server cannot be installed until your Active Directory schema has been properly extended; that means that objects and attributes specific to Lync Server must be added to Active Directory Domain Services (AD DS) before installation can take place.
For example, user account objects must be modified to allow for attributes that do such things as indicate the voice policy assigned to a user or report whether or not that account has been enabled for Enterprise Voice.

The Get-CsAdServerSchema cmdlet returns a single value that tells you whether or not Active Directory has been extended and is prepared for the installation of Lync Server.
If Get-CsAdServerSchema returns the value SCHEMA_VERSION_STATE_CURRENT, the schema has been extended.
If the cmdlet returns any other value, then the schema has not been extended.

Get-CsAdServerSchema typically runs as part of the Setup Wizard; if Setup determines that the schema is not correctly prepared, you will receive an error message and Setup will stop.
However, you can also run Get-CsAdServerSchema independently of the Setup Wizard, giving you the opportunity to verify the schema status before you try to install Lync Server.

Get-CsAdServerSchema performs the same function as the following Microsoft Office Communications Server 2007 R2 command: Lcscmd.exe /domain /action:CheckSchemaPrepState.

Who can run this cmdlet: By default, any user who has read permissions to Active Directory can run the Get-CsAdServerSchema cmdlet locally.
Typically all domain members have this permission.

**Below Content Applies To:** Skype for Business Server 2015

Skype for Business Server 2015 cannot be installed until your Active Directory schema has been properly extended; that means that objects and attributes specific to Skype for Business Server 2015 must be added to Active Directory Domain Services before installation can take place.
For example, user account objects must be modified to allow for attributes that do such things as indicate the voice policy assigned to a user or report whether or not that account has been enabled for Enterprise Voice.

The Get-CsAdServerSchema cmdlet returns a single value that tells you whether or not Active Directory has been extended and is prepared for the installation of Skype for Business Server 2015.
If the Get-CsAdServerSchema cmdlet returns the value SCHEMA_VERSION_STATE_CURRENT, the schema has been extended.
If the cmdlet returns any other value, then the schema has not been extended.

The Get-CsAdServerSchema cmdlet typically runs as part of the Setup Wizard; if Setup determines that the schema is not correctly prepared, you will receive an error message and Setup will stop.
However, you can also run the Get-CsAdServerSchema cmdlet independently of the Setup Wizard, giving you the opportunity to verify the schema status before you try to install Skype for Business Server 2015.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsAdServerSchema
```

The command shown in Example 1 returns the current state of the Active Directory server schema.
If the schema is up to date, the command returns the following value: SCHEMA_VERSION_STATE_CURRENT.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns the current state of the Active Directory server schema.
If the schema is up to date, the command returns the following value: SCHEMA_VERSION_STATE_CURRENT.

Get-CsAdServerSchema

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns the current state of the Active Directory server schema.
If the schema is up to date, the command returns the following value: SCHEMA_VERSION_STATE_CURRENT.

Get-CsAdServerSchema

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsAdServerSchema -Report C:\Logs\Server_Schema.html
```

Example 2 also returns the current state of the Active Directory server schema.
In addition, the command writes more detailed information about that schema to a file named C:\Logs\Server_Schema.html.
This information includes details such as the schema major version and minor version.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 also returns the current state of the Active Directory server schema.
In addition, the command writes more detailed information about that schema to a file named C:\Logs\Server_Schema.html.
This information includes details such as the schema major version and minor version.

Get-CsAdServerSchema -Report C:\Logs\Server_Schema.html

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 also returns the current state of the Active Directory server schema.
In addition, the command writes more detailed information about that schema to a file named C:\Logs\Server_Schema.html.
This information includes details such as the schema major version and minor version.

Get-CsAdServerSchema -Report C:\Logs\Server_Schema.html

## PARAMETERS

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: -Report "C:\Logs\SchemaPrep.html"

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Get-CsAdServerSchema does not accept pipelined input.

###  
None.
The Get-CsAdServerSchema cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsAdServerSchema returns instances of the Microsoft.Rtc.Management.Deployment.SchemaVersionState object.

###  
The Get-CsAdServerSchema cmdlet returns instances of the Microsoft.Rtc.Management.Deployment.SchemaVersionState object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/fba777e5-886c-4914-a492-f2237721c57c(OCS.14).aspx)

[Install-CsAdServerSchema]()

[Online Version](http://technet.microsoft.com/EN-US/library/fba777e5-886c-4914-a492-f2237721c57c(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/fba777e5-886c-4914-a492-f2237721c57c(OCS.16).aspx)

