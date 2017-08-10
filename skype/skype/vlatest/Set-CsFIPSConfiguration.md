---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsFIPSConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Modifies an existing collection of Federal Information Processing Standards (FIPS) configuration settings.
The FIPS standards are a set of United States government security standards required for use in computers maintained by non-military government agencies and by government contractors.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Modifies an existing collection of Federal Information Processing Standards (FIPS) configuration settings.
The FIPS standards are a set of United States government security standards required for use in computers maintained by non-military government agencies and by government contractors.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Identity
```
Set-CsFIPSConfiguration [[-Identity] <XdsIdentity>] [-Confirm] [-Force] [-RequireFIPSCompliantMedia <Boolean>]
 [-Tenant <Guid>] [-WhatIf] [<CommonParameters>]
```

### Instance
```
Set-CsFIPSConfiguration [-Confirm] [-Force] [-Instance <PSObject>] [-RequireFIPSCompliantMedia <Boolean>]
 [-Tenant <Guid>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The Federal Information Processing Standards (FIPS) are a series of standards and guidelines used by computers engaged in work for the United States government; for example, there are FIPS standards that govern the use of such things as cryptography, encryption, and digital signatures.
(See http://www.itl.nist.gov/fipspubs/by-num.htm (http://www.itl.nist.gov/fipspubs/by-num.htm) for more information.) Lync Server 2013 provides an option that enables the software to use only algorithms that meet the FIPS standards.
If you need to work with the United States government (or with other entities that follow FIPS) then you can enable FIPS compliance in Lync Server 2013.

Keep in mind, however, that, for the on-premises version of Lync Server, you have only a single, global collection of FIPS configuration settings: FIPS compliance can only be enabled or disabled for your entire Lync Server implementation.
You cannot selectively enable or disable FIPS compliance on, say, an individual site or an individual Registrar pool.
If you do enable FIPS compliance, you could potentially encounter problems when trying to communicate with organizations that do not fully adhere to the FIPS standards.

By default, FIPS compliance is disabled in Lync Server 2013 Preview.

The Set-CsFIPSConfiguration cmdlet is used to enable or disable FIPS compliance.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsFIPSConfiguration"}

Lync Server Control Panel: The functions carried out by the Set-CsFIPSConfiguration cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The Federal Information Processing Standards (FIPS) are a series of standards and guidelines used by computers engaged in work for the United States government; for example, there are FIPS standards that govern the use of such things as cryptography, encryption, and digital signatures.
(See http://www.itl.nist.gov/fipspubs/by-num.htm (http://www.itl.nist.gov/fipspubs/by-num.htm) for more information.) Skype for Business Server 2015 provides an option that enables the software to use only algorithms that meet the FIPS standards.
If you need to work with the United States government (or with other entities that follow FIPS) then you can enable FIPS compliance in Skype for Business Server 2015.

Keep in mind, however, that, for the on-premises version of Skype for Business Server 2015, you have only a single, global collection of FIPS configuration settings: FIPS compliance can only be enabled or disabled for your entire Skype for Business Server 2015 implementation.
You cannot selectively enable or disable FIPS compliance on, say, an individual site or an individual Registrar pool.
If you do enable FIPS compliance, you could potentially encounter problems when trying to communicate with organizations that do not fully adhere to the FIPS standards.

By default, FIPS compliance is disabled in Skype for Business Server 2015.

The Set-CsFIPSConfiguration cmdlet is used to enable or disable FIPS compliance.

Skype for Business Server Control Panel: The functions carried out by the Set-CsFIPSConfiguration cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

In Example 1, the RequireFIPSCompliantMedia property of the global FIPS configuration settings is set to True ($True).

Set-CsFIPSConfiguration -Identity "global" -RequireFIPSCompliantMedia $True

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1, the RequireFIPSCompliantMedia property of the global FIPS configuration settings is set to True ($True).

Set-CsFIPSConfiguration -Identity "global" -RequireFIPSCompliantMedia $True

## PARAMETERS

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
**Below Content Applies To:** Lync Server 2013

Unique Identity of the FIPS configuration settings to be modified.
Because Lync Server 2013 Preview only supports a single, global collection of FIPS settings, the only collection that can be modified is the global collection:

-Identity global

If you do not include this parameter Set-CsFIPSConfiguration will modify the global collection.



**Below Content Applies To:** Skype for Business Server 2015

Unique Identity of the FIPS configuration settings to be modified.
Because Skype for Business Server 2015 only supports a single, global collection of FIPS settings, the only collection that can be modified is the global collection:

-Identity global

If you do not include this parameter the Set-CsFIPSConfiguration cmdlet will modify the global collection.



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -RequireFIPSCompliantMedia
**Below Content Applies To:** Lync Server 2013

When set to True Lync Server 2013 Preview will only allow media sessions with entities that use FIPS compliant algorithms for authentication and authorization.

Note that, if you require FIPS compliance, then your users will no longer be able to connect to your system by using a Microsoft Lync Server 2010 A/V Edge server.
Instead, you will need to upgrade all your Edge servers to Lync 2013 Preview.

The default value is False.



**Below Content Applies To:** Skype for Business Server 2015

When set to True will Skype for Business Server 2015 only allow media sessions with entities that use FIPS compliant algorithms for authentication and authorization.

Note that, if you require FIPS compliance, then your users will no longer be able to connect to your system by using a Microsoft Lync Server 2010 A/V Edge server.
Instead, you will need to upgrade all your Edge servers to Skype for Business Server 2015.

The default value is False.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
**Below Content Applies To:** Lync Server 2013

Globally unique identifier (GUID) of the Office 365 tenant account for which the FIPS configuration settings are being modified.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



**Below Content Applies To:** Skype for Business Server 2015

Globally unique identifier (GUID) of the Skype for Business Online tenant account for which the FIPS configuration settings are being modified.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Set-CsFIPSConfiguration accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.FIPSConfiguration.FIPSConfiguration object.

###  
The Set-CsFIPSConfiguration cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.FIPSConfiguration.FIPSConfiguration object.

## OUTPUTS

###  
None.
Instead, Set-CsFIPSConfiguration modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.FIPSConfiguration.FIPSConfiguration object.

###  
None.
Instead, the Set-CsFIPSConfiguration cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.FIPSConfiguration.FIPSConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsFIPSConfiguration]()

[New-CsFIPSConfiguration]()

[Remove-CsFIPSConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/920f58ce-e175-41ac-b681-5ac873091593(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/920f58ce-e175-41ac-b681-5ac873091593(OCS.16).aspx)

