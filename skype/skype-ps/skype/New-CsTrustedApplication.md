---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsTrustedApplication

## SYNOPSIS
Adds a trusted application to a pool.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
New-CsTrustedApplication [[-Identity] <ExternalApplicationIdentity>] -Port <Int32> [-EnableTcp]
 [-LegacyApplicationName <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### AppIdAndPoolFqdn
```
New-CsTrustedApplication -ApplicationId <String> -Port <Int32> -TrustedApplicationPoolFqdn <String>
 [-EnableTcp] [-LegacyApplicationName <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
A trusted application is an application developed by a third party that is given trusted status to run as part of Skype for Business Server but that is not a built-in part of the product.
This cmdlet adds a trusted application to a trusted application pool and assigns a port to the external service that runs the application.

Trusted applications need to be associated with Globally Routable User Agent URIs (GRUUs), both service GRUUs and computer GRUUs.
This cmdlet automatically generates these values based on the computers and services associated with the pool on which this application is homed.

When you use this cmdlet to create a trusted application, you must supply values either for the Identity parameter or for the ApplicationID and TrustedApplicationPoolFqdn parameters.
The Identity is the TrustedApplicationPoolFqdn followed by a slash (/) followed by the ApplicationID.
For example, TrustPool.litwareinc.com/tapp2, where TrustPool.litwareinc.com is the TrustedApplicationPoolFqdn and tapp2 is the ApplicationID.

Note that when you enter an application ID (either as part of the Identity parameter or in the ApplicationID parameter) you need to enter only the name of the application.
However, the full application ID will be automatically prefixed with the string urn:application:.
For example, if you enter the value tapp2 for the ApplicationID, that ID will be stored as urn:application:tapp2.
Similarly, if you enter an Identity of TrustPool.litwareinc.com/tapp2, the Identity will be stored in the system as TrustPool.litwareinc.com/urn:application:tapp2.

When you specify the Port value with this cmdlet, the cmdlet does not open the port.
You must open the port in the Windows firewall and any corporate firewalls in order for the trusted application to make contact with networks outside the firewall.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
New-CsTrustedApplication -ApplicationId tapp1 -TrustedApplicationPoolFqdn TrustPool.litwareinc.com -Port 6000
```

This example creates a trusted application with the Application ID tapp1.
We use the TrustedApplicationPoolFqdn parameter to designate the trusted application pool this application will be on, in this case the pool with the FQDN TrustPool.litwareinc.com.
We also must specify a port for the application; in this example we used port 6000.
Note that running this cmdlet by specifying an ApplicationId and a TrustedApplicationPoolFqdn will automatically generate an Identity that can later be used to retrieve, modify, or remove this application.


### -------------------------- Example 2 ------------------------
```
New-CsTrustedApplication -Identity TrustPool.litwareinc.com/tapp2 -Port 6100
```

This example creates a trusted application with the Identity TrustPool.litwareinc.com/tapp2 on Port 6100.
Notice the format of the Identity.
This value must be in the format \<trusted pool FQDN\>/\<Application ID\>.


## PARAMETERS

### -Identity
A unique identifier for the trusted application on the pool.
Identity values must be entered in the format \<pool FQDN\>/\<application ID\>, where pool FQDN is the fully qualified domain name (FQDN) of the pool on which the application resides and application ID is the name of the application.
The application ID must be unique for a given pool.

If you enter an Identity, you cannot specify values for the ApplicationId or TrustedApplicationPoolFqdn parameters.

```yaml
Type: ExternalApplicationIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationId
The name of the application.
This must be a string that is unique within the pool that is specified in the TrustedApplicationPoolFqdn parameter.
The string cannot contain spaces.
If you supply a value for ApplicationId, you must also supply a value for the TrustedApplicationPoolFqdn parameter.
You cannot specify an ApplicationId and an Identity.


```yaml
Type: String
Parameter Sets: AppIdAndPoolFqdn
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Port
The port number on which the application will run.
The port must be unique within a given pool.
In other words, no other applications that use this same port can be defined on the specified pool.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustedApplicationPoolFqdn
The FQDN of the trusted application pool on which the application will reside.
If you supply a value for TrustedApplicationPoolFqdn you must also supply a value for ApplicationId, but you cannot supply a value for the Identity parameter.

```yaml
Type: String
Parameter Sets: AppIdAndPoolFqdn
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableTcp
Specifies that the trusted application will use Transmission Control Protocol (TCP).
Use this parameter only if the trusted application is not a Microsoft Unified Communications Managed API (UCMA) application.
This is because UCMA applications support only the mutual Transport Layer Security (MTLS) protocol.
If you do not specify the Force parameter with the EnableTcp parameter, you'll receive a confirmation prompt before the new trusted application will be created.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LegacyApplicationName
Use this parameter only if the application is being migrated from a Microsoft Office Communications Server 2007 R2 deployment.
This value must be the same as the GRUU type of the Office Communications Server 2007 R2 version of the application in order for the two to work together.

Note that in most cases, setting the ApplicationId parameter equal to the GRUU type will be enough for the applications to work together.
However, if the GRUU type from the Office Communications Server 2007 R2 application contains characters that are not valid in an ApplicationId, that value must be provided in the LegacyApplicationName parameter.

If you don't specify a value for this parameter, the value of the Application ID will automatically be inserted (without the urn:application: prefix).

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

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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

## OUTPUTS

###  
Creates an object of type Microsoft.Rtc.Management.Xds.DisplayTrustedApplication.

## NOTES

## RELATED LINKS

[Remove-CsTrustedApplication]()

[Set-CsTrustedApplication]()

[Get-CsTrustedApplication]()
