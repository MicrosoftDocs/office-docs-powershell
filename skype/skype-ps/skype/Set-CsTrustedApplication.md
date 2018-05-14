---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsTrustedApplication
schema: 2.0.0
---

# Set-CsTrustedApplication

## SYNOPSIS
Modifies the settings for a trusted application.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Set-CsTrustedApplication [[-Identity] <ExternalApplicationIdentity>] [-Port <Int32>] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
A trusted application is an application developed by a third party that is given trusted status to run as part of Skype for Business Server but that is not a built-in part of the product.
This cmdlet allows you to modify the port number that the external service that runs the application is using.

When you use this cmdlet to modify a trusted application, you must supply a value for the Identity parameter.
The Identity is the fully qualified domain name (FQDN) of the pool on which the application is homed followed by a slash (/) followed by the application ID.
For example, TrustPool.litwareinc.com/tapp2, where TrustPool.litwareinc.com is the pool FQDN and tapp2 is the application ID.
Note that if you view an existing application by calling the `Get-CsTrustedApplication` cmdlet, you'll see an ID that looks more like this: TrustPool.litwareinc.com/urn:application:tapp2.
Notice the prefix urn:application: before the application name (tapp2).
While this prefix is part of the Identity, it's not required when you specify the value for the Identity parameter.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsTrustedApplication -Identity TrustPool.litwareinc.com/tapp2 -Port 6200
```

This example modifies the port for the trusted application with the Identity TrustPool.litwareinc.com/tapp2 to port 6200.
This is accomplished by passing the `Set-CsTrustedApplication` cmdlet an Identity of TrustPool.litwareinc.com/tapp2.
This Identity consists of the name of the pool on which the application resides followed by the name (or ID) of the application.
We then include the Port parameter, giving it a value of 6200 to modify that value.


## PARAMETERS

### -Identity
The unique identifier of the trusted application you want to modify.
Identity values must be entered in the format \<pool FQDN\>/\<application ID\>, where pool FQDN is the FQDN of the pool on which the application resides, and application ID is the name of the application.

```yaml
Type: ExternalApplicationIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Port
The port number on which the application will run.

```yaml
Type: Int32
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
Microsoft.Rtc.Management.Xds.DisplayTrustedApplication object.
Accepts pipelined input of trusted application objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It modifies an object of type Microsoft.Rtc.Management.Xds.DisplayTrustedApplication.

## NOTES

## RELATED LINKS

[New-CsTrustedApplication](New-CsTrustedApplication.md)

[Remove-CsTrustedApplication](Remove-CsTrustedApplication.md)

[Get-CsTrustedApplication](Get-CsTrustedApplication.md)
