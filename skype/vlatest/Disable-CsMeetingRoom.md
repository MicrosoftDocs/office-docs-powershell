---
applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Disable-CsMeetingRoom

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Disables a Microsoft Lync Server 2013 Preview meeting room.
A meeting room is a conferencing device designed to address video conferencing and collaboration scenarios in small conference rooms.
When you disable a meeting room object you remove all the Lync Server-specific Active Directory attributes assigned to the user account that represents the meeting room.
However, the Active Directory user account itself is not deleted.
This cmdlet was introduced in Lync Server 2013 Preview.

Below Content Applies To: Skype for Business Online

Disable-CsMeetingRoom \[-Identity\] \<UserIdParameter\> \[-DomainController \<Fqdn\>\] \[-PassThru\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

Below Content Applies To: Skype for Business Server 2015

Disables a Skype for Business Server 2015 meeting room.
A meeting room is a conferencing device designed to address video conferencing and collaboration scenarios in small conference rooms.
When you disable a meeting room object you remove all the Skype for Business Server 2015-specific Active Directory attributes assigned to the user account that represents the meeting room.
However, the Active Directory user account itself is not deleted.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Disable-CsMeetingRoom [-Identity] <UserIdParameter> [-Confirm] [-DomainController <Fqdn>] [-PassThru] [-WhatIf]
 [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2013

In Lync Server, meeting rooms are self-contained computer appliances that are installed in conference rooms and supply advanced meeting capabilities such as:

One touch meeting join experience

Multi-view video gallery

Touch-enabled white-boarding on the front of room screen

Calendar integration to provide access to scheduled meetings

Content sharing and switching

In order to manage these new endpoint devices you must, among other things, create and enable a Microsoft Exchange Server 2013 Preview resource mailbox account for the device, then enable that resource account for Lync Server 2013 Preview.
Note that, for Lync Server, there are no cmdlets for creating or removing meeting rooms.
Instead, you use the Enable-CsMeetingRoom cmdlet to enable meeting rooms and the Disable-CsMeetingRoom cmdlet to disable meeting rooms.
The resource account must already exist in order for you to enable the meeting room, and disabling a meeting room only removes that room from your collection of meeting rooms; it does not delete the resource mailbox account.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Disable-CsMeetingRoom"}

Lync Server Control Panel: The functions carried out by the Disable-CsMeetingRoom cmdlet are not available in the Lync Server Control Panel.

Below Content Applies To: Skype for Business Online

{{Fill in the Description}}

Below Content Applies To: Skype for Business Server 2015

In Skype for Business Server 2015, meeting rooms are self-contained computer appliances that are installed in conference rooms and supply advanced meeting capabilities such as:

One touch meeting join experience

Multi-view video gallery

Touch-enabled white-boarding on the front of room screen

Calendar integration to provide access to scheduled meetings

Content sharing and switching

In order to manage these new endpoint devices you must, among other things, create and enable an Exchange resource mailbox account for the device, then enable that resource account for Skype for Business Server 2015.
Note that, for Skype for Business Server 2015, there are no cmdlets for creating or removing meeting rooms.
Instead, you use the Enable-CsMeetingRoom cmdlet to enable meeting rooms and the Disable-CsMeetingRoom cmdlet to disable meeting rooms.
The resource account must already exist in order for you to enable the meeting room, and disabling a meeting room only removes that room from your collection of meeting rooms; it does not delete the resource mailbox account.

Skype for Business Server Control Panel: The functions carried out by the Disable-CsMeetingRoom cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 disables the meeting room sip:RedmondMeetingRoom@litwareinc.com.

Disable-CsMeetingRoom -Identity "sip:RedmondMeetingRoom@litwareinc.com"

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 disables the meeting room sip:RedmondMeetingRoom@litwareinc.com.

Disable-CsMeetingRoom -Identity "sip:RedmondMeetingRoom@litwareinc.com"

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, all the meeting rooms currently in use in the organization are disabled.
To do this, Get-CsMeetingRoom is first used to retrieve a collection of all the meeting rooms.
That collection is then piped to the Disable-CsMeetingRoom cmdlet, which disables each meeting room in the collection.

Get-CsMeetingRoom | Disable-CsMeetingRoom

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, all the meeting rooms currently in use in the organization are disabled.
To do this, the Get-CsMeetingRoom cmdlet is first used to retrieve a collection of all the meeting rooms.
That collection is then piped to the Disable-CsMeetingRoom cmdlet, which disables each meeting room in the collection.

Get-CsMeetingRoom | Disable-CsMeetingRoom

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Indicates the Identity of the user account to be configured as a meeting room.
Identities are typically specified by using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).

You can also reference a user account by using the user's Active Directory distinguished name.

You can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" returns all the user who have a display name that ends with the string value " Smith".



Below Content Applies To: Skype for Business Online

{{Fill Identity Description}}



```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Confirm
Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Prompts you for confirmation before executing the command.



Below Content Applies To: Skype for Business Online

Prompts you for confirmation before running the cmdlet.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Enables you to connect to the specified domain controller in order to disable a meeting room.
To connect to a particular domain controller, include the DomainController parameter followed by the computer name (for example, atl-dc-001) or its fully qualified domain name (FQDN) (for example, atl-dc-001.litwareinc.com).



Below Content Applies To: Skype for Business Online

{{Fill DomainController Description}}



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Enables you to pass a meeting room object through the pipeline that represents the meeting room being disabled.
By default, the Disable-CsMeetingRoom cmdlet does not pass objects through the pipeline.



Below Content Applies To: Skype for Business Online

{{Fill PassThru Description}}



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Describes what would happen if you executed the command without actually executing the command.



Below Content Applies To: Skype for Business Online

Shows what would happen if the cmdlet runs.
The cmdlet is not run.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

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
Disable-CsMeetingRoom accepts pipelined instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSADMeetingRoom object.

### Microsoft.Rtc.Management.AD.UserIdParameter

###  
The Disable-CsMeetingRoom cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSADMeetingRoom object.

## OUTPUTS

###  
None.
Instead, Disable-CsMeetingRoom deletes instance of the Microsoft.Rtc.Management.ADConnect.Schema.OCSADMeetingRoom object.

### System.Object

###  
None.
Instead, the Disable-CsMeetingRoom cmdlet deletes instance of the Microsoft.Rtc.Management.ADConnect.Schema.OCSADMeetingRoom object.

## NOTES

## RELATED LINKS

[Enable-CsMeetingRoom]()

[Get-CsMeetingRoom]()

[Move-CsMeetingRoom]()

[Set-CsMeetingRoom]()

[Online Version](http://technet.microsoft.com/EN-US/library/1bce6b58-484f-4e59-a259-aa315d37d9b0(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/1bce6b58-484f-4e59-a259-aa315d37d9b0(OCS.16).aspx)

