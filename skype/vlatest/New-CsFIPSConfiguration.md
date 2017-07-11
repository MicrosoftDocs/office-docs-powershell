---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsFIPSConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Creates a new collection of Federal Information Processing Standards (FIPS) configuration settings.
The FIPS standards are a set of United States government security standards required for use in computers maintained by non-military government agencies and by government contractors.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Creates a new collection of Federal Information Processing Standards (FIPS) configuration settings.
The FIPS standards are a set of United States government security standards required for use in computers maintained by non-military government agencies and by government contractors.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
New-CsFIPSConfiguration [-Identity] <XdsIdentity> [-Confirm] [-Force] [-InMemory]
 [-RequireFIPSCompliantMedia <Boolean>] [-Tenant <Guid>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The Federal Information Processing Standards (FIPS) are a series of standards and guidelines used by computers engaged in work for the United States government; for example, there are FIPS standards that govern the use of such things as cryptography, encryption, and digital signatures.
(See http://www.itl.nist.gov/fipspubs/by-num.htm (http://www.itl.nist.gov/fipspubs/by-num.htm) for more information.) Lync Server 2013 provides an option that enables the software to use only algorithms that meet the FIPS standards.
If you need to work with the United States government (or with other entities that follow FIPS) then you can enable FIPS compliance in Lync Server 2013.

Keep in mind, however, that, for the on-premises version of Lync Server, you have only a single, global collection of FIPS configuration settings: FIPS compliance can only be enabled or disabled for your entire Lync Server implementation.
You cannot selectively enable or disable FIPS compliance on, say, an individual site or an individual Registrar pool.
If you do enable FIPS compliance, you could potentially encounter problems when trying to communicate with organizations that do not fully adhere to the FIPS standards.
That means that the New-CsFIPSConfiguration cmdlet is primarily used to manage FIPS compliance for Office 365 tenants.

By default, FIPS compliance is disabled in Lync Server 2013 Preview.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsFIPSConfiguration"}

Lync Server Control Panel: The functions carried out by the New-CsFIPSConfiguration cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The Federal Information Processing Standards (FIPS) are a series of standards and guidelines used by computers engaged in work for the United States government; for example, there are FIPS standards that govern the use of such things as cryptography, encryption, and digital signatures.
(See http://www.itl.nist.gov/fipspubs/by-num.htm (http://www.itl.nist.gov/fipspubs/by-num.htm) for more information.) Skype for Business Server 2015 provides an option that enables the software to use only algorithms that meet the FIPS standards.
If you need to work with the United States government (or with other entities that follow FIPS) then you can enable FIPS compliance in Skype for Business Server 2015.

Keep in mind, however, that, for the on-premises version of Skype for Business Server 2015, you have only a single, global collection of FIPS configuration settings: FIPS compliance can only be enabled or disabled for your entire Skype for Business Server 2015 implementation.
You cannot selectively enable or disable FIPS compliance on, say, an individual site or an individual Registrar pool.
If you do enable FIPS compliance, you could potentially encounter problems when trying to communicate with organizations that do not fully adhere to the FIPS standards.
That means that the New-CsFIPSConfiguration cmdlet is primarily used to manage FIPS compliance for Skype for Business Online.

By default, FIPS compliance is disabled in Skype for Business Server 2015.

Skype for Business Server Control Panel: The functions carried out by the New-CsFIPSConfiguration cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 1 create a new, in-memory-only set of FIPS configuration settings and then later use these settings to update the global collection of FIPS configuration settings.
In order to do this, the first command in the example uses New-CsFIPSConfiguration and the InMemory parameter to create a new collection of FIPS configurations settings with the Identity "global"; the resulting settings object is stored in a variable named $x.

In the second command, the Set-CsFIPSConfiguration cmdlet and the Instance parameter are then used to replace the existing global collection of FIPS settings with the new collection stored in $x.

Although this example works, it is easier to modify FIPS configuration settings by using the Set-CsFIPSConfiguration cmdlet.

$x = New-CsFIPSConfiguration -Identity "global" -RequireFIPSCompliantMedia $False -InMemory

Set-CsFIPSConfiguration -Instance $x

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 1 create a new, in-memory-only set of FIPS configuration settings and then later use these settings to update the global collection of FIPS configuration settings.
In order to do this, the first command in the example uses the New-CsFIPSConfiguration cmdlet and the InMemory parameter to create a new collection of FIPS configurations settings with the Identity "global"; the resulting settings object is stored in a variable named $x.

In the second command, the Set-CsFIPSConfiguration cmdlet and the Instance parameter are then used to replace the existing global collection of FIPS settings with the new collection stored in $x.

Although this example works, it is easier to modify FIPS configuration settings by using the Set-CsFIPSConfiguration cmdlet.

$x = New-CsFIPSConfiguration -Identity "global" -RequireFIPSCompliantMedia $False -InMemory

Set-CsFIPSConfiguration -Instance $x

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2013

Unique identifier for the new collection of FIPS configuration settings.
Because Lync Server 2013 Preview only supports a single, global collection of FIPS settings, the only way you can use this parameter is to create a "new" global collection that exists only in memory.
You will also need to use the InMemory parameter in order to do that.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the new collection of FIPS configuration settings.
Because Skype for Business Server 2015 only supports a single, global collection of FIPS settings, the only way you can use this parameter is to create a "new" global collection that exists only in memory.
You will also need to use the InMemory parameter in order to do that.



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
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

### -InMemory
Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.

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

### -RequireFIPSCompliantMedia
**Below Content Applies To:** Lync Server 2013

When set to True, Lync Server 2013 Preview will only allow media sessions with entities that use FIPS compliant algorithms for authentication and authorization.

Note that, if you require FIPS compliance, then your users will no longer be able to connect to your system by using a Microsoft Lync Server 2010 A/V Edge server.
Instead, you will need to upgrade all your Edge servers to Lync 2013 Preview.

The default value is False.



**Below Content Applies To:** Skype for Business Server 2015

When set to True, Skype for Business Server 2015 will only allow media sessions with entities that use FIPS compliant algorithms for authentication and authorization.

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

Globally unique identifier (GUID) of the Office 365 tenant account for which the new FIPS configuration settings are being created.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



**Below Content Applies To:** Skype for Business Server 2015

Globally unique identifier (GUID) of the Skype for Business Online tenant account for which the new FIPS configuration settings are being created.
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
Describes what would happen if you executed the command without actually executing the command.

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
None.
New-CsFIPSConfiguration does not accept pipelined input.

###  
None.
The New-CsFIPSConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsFIPSConfiguration creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.FIPSConfiguration.FIPSConfiguration object.

###  
The New-CsFIPSConfiguration cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.FIPSConfiguration.FIPSConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsFIPSConfiguration]()

[Remove-CsFIPSConfiguration]()

[Set-CsFIPSConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/9ce030fb-fb6b-47a2-9fb9-69e8369b43be(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/9ce030fb-fb6b-47a2-9fb9-69e8369b43be(OCS.16).aspx)

