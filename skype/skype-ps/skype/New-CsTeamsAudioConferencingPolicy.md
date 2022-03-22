New-CsTeamsAudioConferencingPolicy

Audio conferencing policies can be used to manage audio conferencing toll- and toll-free numbers to be displayed in meeting invites created by users within your organization.
Syntax
PowerShell

New-CsTeamsAudioConferencingPolicy

   [-Identity <Policy name>]
   [-Tenant <Guid>]
   [-MeetingInvitePhoneNumbers <comma separated list of numbers>]
   [-AllowTollFreeDialin <Boolean>]
   [-Force]
   [-WhatIf]
   [-Confirm]
   [<CommonParameters>]

Description
The CsTeamsAudioConferencingPolicy cmdlet enables administrators to control audio conferencing toll- and toll-free numbers to be displayed in meeting invites created by users within your organization. This cmdlet creates a new Teams audio conferencing policy. Custom policies can then be assigned to users using the Grant-CsTeamsAudioConferencingPolicy cmdlet.
Examples
Example 1

PS C:\> New-CsTeamsAudioConferencingPolicy -Identity "EMEA Users" -AllowTollFreeDialin $False

The command shown in Example 1 uses the New-CsTeamsAudioConferencingPolicy cmdlet to create a new audio-conferencing policy with the Identity “EMEA users”. This policy will use all the default values for a meeting policy except one: AllowTollFreeDialin; in this example, meetings created by users with this policy cannot include Toll Free phone numbers.


Example 2

PS C:\> New-CsTeamsAudioConferencingPolicy -Identity "EMEA Users" -AllowTollFreeDialin $True -MeetingInvitePhoneNumbers “+49695095XXXXX”,”+353156YYYYY”,”+1800856ZZZZZ”

The command shown in Example 2 uses the New-CsTeamsAudioConferencingPolicy cmdlet to create a new audio-conferencing policy with the Identity “EMEA users”. This policy will use all the default values for a meeting policy except one: MeetingInvitePhoneNumbers; in this example, meetings created by users with this policy will include the following toll and toll free phone numbers “+49695095XXXXX”,”+353156YYYYY”,”+1800856ZZZZZ”.

Parameters
-Identity
Specify the name of the policy that you are creating.

Type:	XdsIdentity
Position:	1
Default value:	None


-AllowTollFreeDialIN
Determines whether users of the Policy can have Toll free numbers

Type:	Boolean
Position:	Named
Default value:	True
-MeetingInvitePhoneNumbers
Determines the list of audio-conferencing Toll- and Toll-free telephone numbers that will be included in meetings invites created by users of this policy.
Type:	Comma separated list of numbers
Position:	Named
Default value:	None

