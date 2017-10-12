---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Get-CsAdServerSchema
schema: 2.0.0
---

# Get-CsAdServerSchema

## SYNOPSIS
Returns information indicating whether your Active Directory schema has been correctly configured to allow for the installation of Skype for Business Server.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Get-CsAdServerSchema [-Report <String>] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server cannot be installed until your Active Directory schema has been properly extended; that means that objects and attributes specific to Skype for Business Server must be added to Active Directory Domain Services before installation can take place.
For example, user account objects must be modified to allow for attributes that do such things as indicate the voice policy assigned to a user or report whether or not that account has been enabled for Enterprise Voice.

The Get-CsAdServerSchema cmdlet returns a single value that tells you whether or not Active Directory has been extended and is prepared for the installation of Skype for Business Server.
If the Get-CsAdServerSchema cmdlet returns the value SCHEMA_VERSION_STATE_CURRENT, the schema has been extended.
If the cmdlet returns any other value, then the schema has not been extended.

The Get-CsAdServerSchema cmdlet typically runs as part of the Setup Wizard; if Setup determines that the schema is not correctly prepared, you will receive an error message and Setup will stop.
However, you can also run the Get-CsAdServerSchema cmdlet independently of the Setup Wizard, giving you the opportunity to verify the schema status before you try to install Skype for Business Server.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsAdServerSchema
```

The command shown in Example 1 returns the current state of the Active Directory server schema.
If the schema is up to date, the command returns the following value: SCHEMA_VERSION_STATE_CURRENT.

### -------------------------- Example 2 --------------------------
```
Get-CsAdServerSchema -Report C:\Logs\Server_Schema.html
```

Example 2 also returns the current state of the Active Directory server schema.
In addition, the command writes more detailed information about that schema to a file named C:\Logs\Server_Schema.html.
This information includes details such as the schema major version and minor version.


## PARAMETERS

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: 
`-Report "C:\Logs\SchemaPrep.html"`

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

### None


## OUTPUTS

### Microsoft.Rtc.Management.Deployment.SchemaVersionState


## NOTES


## RELATED LINKS

[Install-CsAdServerSchema](Install-CsAdServerSchema.md)
